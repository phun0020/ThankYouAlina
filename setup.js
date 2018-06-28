// Matter.js consts
const Engine = Matter.Engine,
    Runner = Matter.Runner,
    Common = Matter.Common,
    MouseConstraint = Matter.MouseConstraint,
    Mouse = Matter.Mouse,
    World = Matter.World,
    Vertices = Matter.Vertices,
    Svg = Matter.Svg,
    Body = Matter.Body,
    Composite = Matter.Composite
    Bodies = Matter.Bodies;

// Debug setting
const DEBUG = false;

// Setting
const TEXTSIZE = 17,
    RADIUS = 6,
    FACTOR = 3,
    STEP = RADIUS * FACTOR,
    TIMESCALE = 1;

let FRICTION_AIR = 0.1;
let engine = Engine.create();
engine.timing.timeScale = TIMESCALE;

let world = engine.world;
Engine.run(engine);