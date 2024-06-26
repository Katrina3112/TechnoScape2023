import * as THREE from 'three';
import { GLTFLoader } from 'https://unpkg.com/three@0.136.0/examples/jsm/loaders/GLTFLoader.js';
import { DRACOLoader } from 'https://unpkg.com/three@0.136.0/examples/jsm/loaders/DRACOLoader.js';
import TWEEN from 'https://unpkg.com/@tweenjs/tween.js@18.6.4/dist/tween.esm.js';

// HELPER
window.THREE = THREE;
window.TWEEN = TWEEN;

export function getAllChildren(objects){
    const mixed = [objects];

    const child = objects.children;

    // mixed.push(...child);
    child.forEach(function(el, i){
        mixed.push(...getAllChildren(el));
    });

    return mixed;
}

function HaloIora(params){
    let frame = 0;
    let _time = 0;
    const state = {};

    const renderer = new THREE.WebGLRenderer(params);
    const $container = $(params.container);

    // const composer = new EffectComposer( renderer );

    const scene = new THREE.Scene();

    const cameras = new THREE.ArrayCamera([]);
    let camera = null;
    scene.add(cameras);

    const materials = [];
    const textures = [];

    $container.append(renderer.domElement);
    const clock = new THREE.Clock(true);

    let model = null;
    let mixer = null;
    let action = null;

    (async ()=>{
        await load_lights();
        await load_cameras();
        await load_controls();
        await load_effects();
        await register_materials();
        await register_textures();
        await load_objects();

        assign2renderer();

        clock.start();
        scene.dispatchEvent({type:'ready', renderer});
        _tick(0);
    })();

    async function load_lights(){
        // Point Light - Top Front Left

        // Light with reflection
        // const point1 = new THREE.PointLight( 0xffffff, 0.8, 10000);

        // Light w/o reflection
        const point1 = new THREE.AmbientLight( 0xffffff);
        point1.position.set(-113,-598,480);
        scene.add(point1);

        // Point Light - Bottom Front Right

        // Light with reflection
        // const point2 = new THREE.PointLight( 0xffffff, 0.5, 10000);

        // Light w/o reflection
        const point2 = new THREE.AmbientLight( 0xffffff);
        point2.position.set(100,-585,-463);
        scene.add(point2);
    }

    async function load_cameras(){
        // 3D
        // camera = new THREE.PerspectiveCamera(75, $container.width() / $container.height(), 0.1, 10000);

        // 2D
        camera = new THREE.OrthographicCamera( $container.width()/-1.5, $container.width()/1.5, $container.height()/1.5, $container.height()/-1.5, 0.1, 10000);
        camera.position.set(0, -230, 90);
        camera.rotation.set(90 * Math.PI / 180, 0, 0);
        cameras.add(camera);
    }

    async function load_controls(){
        //
    }

    async function load_effects(){
        // Renderer
        renderer.outputEncoding = THREE.sRGBEncoding;
        renderer.toneMapping = THREE.ACESFilmicToneMapping;
        renderer.setPixelRatio(window.devicePixelRatio);
    }

    async function register_materials(){
        //
    }

    async function register_textures(){
        //
    }

    async function load_objects(){
        const loader = new GLTFLoader();

        const dracoLoader = new DRACOLoader();

        loader.setDRACOLoader(dracoLoader);

        const gltf = await new Promise((res, rej)=>loader.load('./assets/3d/halo-black.glb', res, undefined, rej));
        const halo = gltf.scene;
        halo.gltf = gltf;
        model = halo;

        halo.name = 'iora';
        halo.scale.set(100,100,100);
        halo.rotation.set(92 * Math.PI / 180, 0, 0);
        halo.children[0].rotation.set(0, 0 * Math.PI / 180, 0);
        halo.position.set(0,0,-25);
        halo.castShadow = true;
        halo.receiveShadow = false;

        halo.traverse(function(el){
            if(typeof el.material == 'object'){
                el.material.metalness = 0;
                el.material.roughness = 0.5;
            }
        });

        scene.add(halo);
    }

    function do_render() {
        if(camera) return renderer.render(scene, camera);
    }

    scene.addEventListener('ready', function(){
        var mesh = model.children[0];
        mixer = new THREE.AnimationMixer( mesh );
        var clips = model.gltf.animations;
        var clip = clips[0];
        action = mixer.clipAction(clip);
        action.loop = THREE.LoopOnce;
        action.startAt(2.3);
        action.play();
        // mixer.addEventListener('loop', function(){console.log([arguments])});
        mixer.addEventListener('finished', reset);

        $container.click(play);
        $container.mouseenter(play);
        function play(e){
            action.play();
        }
        function reset(e){
            action.stop();
            action.reset();
        }

        var min=-25, max=25;
        var mid = min + ((max - min) / 2);
        var period = 20000 / 1.5;
        var climax = period / 4;
        const tween = [
            [{z:min}],
            [{z:mid}, climax, TWEEN.Easing.Quadratic.In],
            [{z:max}, climax, TWEEN.Easing.Quadratic.Out],
            [{z:mid}, climax, TWEEN.Easing.Quadratic.In],
            [{z:min}, climax, TWEEN.Easing.Quadratic.Out],
        ];

        function doTween(tweens, update, finish){
            function nextTween(i=1){
                // console.log([tweens, i, tweens[i], tweens[i-1]]);
                let pos = Object.assign({}, tweens[i-1][0]);
                let tween = tweens[i];
                // console.log([pos.z, tween[0].z]);
                var x = new TWEEN.Tween(pos)
                                .to(tween[0], tween[1])
                                .easing(tween[2])
                                .onUpdate(function(){
                                    update(pos, tween, x);
                                }).onComplete(function(){
                                    if(i+1 < tweens.length) nextTween(i+1);
                                    else finish(pos, tween, x);
                                });
                x.start();
            }
            nextTween(1);
        }

        function loop(){
            doTween(tween, function(pos, props, tween){
                model.position.setZ(pos.z);
            }, function(pos, props, tween){
                loop();
            });
        }
        loop();
    });

    scene.addEventListener('update', function(){
        mixer.update(clock.getDelta());
        TWEEN.update();
    });

    scene.addEventListener('animate', function(){
        //
    });

    function _tick(t=0){
        frame++;
        _time = t;
        assign2renderer();
        requestAnimationFrame(_tick);

        renderer.setSize($container.width(), $container.height());
        if(camera) camera.aspect = $container.width() / $container.height();
        if(camera) camera.updateProjectionMatrix()

        scene.dispatchEvent({type:'update', renderer});
        scene.dispatchEvent({type:'animate', renderer});
        do_render();
    }

    function assign2renderer(){
        Object.assign(renderer, {
            frame, _time, state, $container, scene, 
            cameras, camera, materials, textures, clock,
            _tick, do_render, model, mixer, action
            // composer
        });
    }

    return renderer;
}

export default HaloIora;