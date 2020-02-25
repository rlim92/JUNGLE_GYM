const Exercise = require("./models/Exercise");

const exercises = [
    {
        name: "Pushup",
        categories: "upperbody",
        description: "With hands shoulder-width apart, keep feet flexed at hip distance and tighten your core. Bend elbows until chest reaches the floor, then push back up. Make sure to keep your elbows tucked close to your body.",
        reps: 10,
        seconds: null
    }, {
        name: "Pullup",
        categories: "upperbody",
        description: "Find some monkey bars that you can hang from. From a dead hang with your arms, pull yourself up until your chin reaches the height of the bar. Control your descent. Repeat.",
        reps: 5,
        seconds: null
    }, {
        name: "Burpee",
        categories: "upperbody",
        description: "Start in a low squat position with your hands on the floor. Next, kick your feet back to a push-up position. Complete one push- up, then immediately return your feet to the squat position. Leap up as high as possible before squatting and moving back into the push - up portion of the show.",
        reps: 5,
        seconds: null
    }, {
        name: "Plank",
        categories: "core",
        description: "Lie facedown with forearms on the floor and hands clasped. Extend legs behind you and rise up on toes. Keeping back straight, tighten core and hold the position for 30 to 60 seconds (or as long as you can hang).",
        reps: null,
        seconds: 30
    }, {
        name: "Wall sit",
        categories: "lowerbody",
        description: "Slowly slide your back down a wall until your thighs are parallel to the floor. Make sure knees are directly above ankles and keep back straight.",
        reps: null,
        seconds: 30
    }, {
        name: "Lunge",
        categories: "lowerbody",
        description: "Stand with hands on hips and feet hip-width apart. Step your right leg forward and slowly lower your body until left (back) knee is close to or touching the floor and bent at least 90 degrees. Return to the starting position and repeat on the other side.",
        reps: 10,
        seconds: null
    }, {
        name: "Squat",
        categories: "lowerbody",
        description: "Stand with feet parallel or turned out 15 degrees — whatever is most comfortable. Slowly start to crouch by bending hips and knees until thighs are at least parallel to the floor. Make sure your heels do not rise off the floor.Press through your heels to return to a standing position.",
        reps: 10,
        seconds: null
    },]

module.exports = (db) => {
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
