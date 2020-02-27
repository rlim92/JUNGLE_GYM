const Exercise = require("./models/Exercise");

const exercises = [ 
    {
        name: "Pushup",
        categories: "Upper Body",
        description: "With hands shoulder-width apart, keep feet flexed at hip distance and tighten your core. Bend elbows until chest reaches the floor, then push back up. Make sure to keep your elbows tucked close to your body.",
        reps: 10,
        seconds: null
    }, {
        name: "Pullup",
        categories: "Upper Body",
        description: "Grab the bar with a underhand grip at shoulder length width and fully extend your arms. Pull yourself up until your chin has cleared the bar. Slowly release and go back to the starting position",
        reps: 5,
        seconds: null
    }, {
        name: "Inverted Bodyweight Row",
        categories: "Upper Body",
        description: "Set the bar(or your rings) around chest height. Postion yourself under the bar Grasp the bar with arms slightly wider than shoulder width. Put your feet out in front of you so that your upper chest is directly under the bar. Pull yourself towards the bar until your elbows are bent as less than 45 degrees. Pause and then slowly lower your self back to the starting position.",
        reps: 5,
        seconds: null
    }, {
        name: "Half-Pullup",
        categories: "Upper Body",
        description: "Grab the bar with a underhand grip at shoulder length width and fully extend your arms. Pull yourself up until your elbows have bent 45 degrees. Pause and then slowly go back to the starting position",
        reps: 5,
        seconds: null
    }, {
        name: "Bar Hang",
        categories: "Core",
        description: "Grab the bar at shoulder length width and fully extend your arms. Keep your core stable and do your best to not swing around",
        reps: null,
        seconds: 45
    }, {
        name: "Plank",
        categories: "Core",
        description: "Lie facedown with forearms on the floor and hands clasped. Extend legs behind you and rise up on toes. Keeping back straight, tighten core and hold the position for 30 to 60 seconds (or as long as you can hang).",
        reps: null,
        seconds: 30
    }, {
        name: "Leg Raise",
        categories: "Core",
        description: "Lie down on your back and your hands slightly away from your body to support yourself. Lift your legs upwards while keeping them together until your butt has left the floor. Slowly go back to the starting position",
        reps: 5,
        seconds: null
    }, {
        name: "Knees To Elbows Hang",
        categories: "Core",
        description: "Grab the bar at shoulder length width and fully extend your arms. Keep your core stable and do your best to not swing around. Slowly bring your knees to your elbows then slowly go back to the starting position",
        reps: 8,
        seconds: null
    }, {
        name: "Jumping Jacks",
        categories: "Core",
        description: "Stand upright with your legs together, arm at your sides. Bend your knees slightly and jump into the air. As you jump, spread your legs to be about shoulder-width apart. Stretch your arms out and over your head. Jump back to the starting position",
        reps: null,
        seconds: 45
    }, {
        name: "Burpee",
        categories: "Core",
        description: "Start in a low squat position with your hands on the floor. Next, kick your feet back to a push-up position. Complete one push- up, then immediately return your feet to the squat position. Leap up as high as possible before squatting and moving back into the push - up portion of the show.",
        reps: 5,
        seconds: null
    }, {
        name: "Jumping Knee Tuck",
        categories: "Lower Body",
        description: "Jump in place using your arms to stablize yoruself. Make sure your knees are brought as high as possible. The best is if your knees touch your elbows.",
        reps: null,
        seconds: 45
    }, {
        name: "Wall sit",
        categories: "Lower Body",
        description: "Slowly slide your back down a wall until your thighs are parallel to the floor. Make sure knees are directly above ankles and keep back straight.",
        reps: null,
        seconds: 30
    }, {
        name: "Lunge",
        categories: "Lower Body",
        description: "Stand with hands on hips and feet hip-width apart. Step your right leg forward and slowly lower your body until left (back) knee is close to or touching the floor and bent at least 90 degrees. Return to the starting position and repeat on the other side.",
        reps: 10,
        seconds: null
    }, {
        name: "Squat",
        categories: "Lower Body",
        description: "Stand with feet parallel or turned out 15 degrees — whatever is most comfortable. Slowly start to crouch by bending hips and knees until thighs are at least parallel to the floor. Make sure your heels do not rise off the floor.Press through your heels to return to a standing position.",
        reps: 10,
        seconds: null
    },]

module.exports = () => {
    // Exercise.findByIdAndRemove({});
    Exercise.deleteMany({}).exec();
    for (let i = 0; i < exercises.length; i++) {
        const newExercise = new Exercise({
            name: exercises[i]["name"],
            category: exercises[i]["categories"],
            description: exercises[i]["description"],
            reps: exercises[i]["reps"],
            seconds: exercises[i]["seconds"]
        })
        newExercise.save()
    }
}
