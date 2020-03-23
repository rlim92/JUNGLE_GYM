const Exercise = require("./models/Exercise");




const exercises = [ 
    {
        name: "Pushups",
        categories: ["Upper Body"],
        description: "With hands shoulder-width apart, keep feet flexed at hip distance and tighten your core. Bend elbows until chest reaches the floor, then push back up. Make sure to keep your elbows tucked close to your body.",
        reps: 10,
        seconds: null
    }, {
        name: "Pullups",
        categories: ["Upper Body"],
        description: "Grab the bar with a underhand grip at shoulder length width and fully extend your arms. Pull yourself up until your chin has cleared the bar. Slowly release and go back to the starting position",
        reps: 5,
        seconds: null
    }, {
        name: "Inverted Bodyweight Rows",
        categories: ["Upper Body"],
        description: "Set the bar(or your rings) around chest height. Postion yourself under the bar Grasp the bar with arms slightly wider than shoulder width. Put your feet out in front of you so that your upper chest is directly under the bar. Pull yourself towards the bar until your elbows are bent as less than 45 degrees. Pause and then slowly lower your self back to the starting position.",
        reps: 5,
        seconds: null
    }, {
        name: "Half-Pullups",
        categories: ["Upper Body"],
        description: "Grab the bar with a underhand grip at shoulder length width and fully extend your arms. Pull yourself up until your elbows have bent 45 degrees. Pause and then slowly go back to the starting position",
        reps: 5,
        seconds: null
    }, {
        name: "Dips",
        categories: ["Upper Body"],
        description: "Find a bench or surface you can grip (around knee level). Sit on the bench, place your hands on the edge of the surface and move yoour hip forward. Fold your arms and knees and bring your body down until your back touches the surface. Don't lean too forward. Then move your body up again. You can position your legs a bit forward to make the exercise a bit harder.",
        reps: 5,
        seconds: null
    }, {
       name: "Feet Elevated Pushups",
       categories: ["Upper Body"],
       description: "Put your feet on an elevated surface such as a bench. Place your hands below your shoulders. Do a tradional push up while keeping your feet on the elevated surface. Return to your start position and repeat.",
       reps: 8,
       seconds: null
    }, {
        name: "Bar Hang",
        categories: ["Core"],
        description: "Grab the bar at shoulder length width and fully extend your arms. Keep your core stable and do your best to not swing around",
        reps: null,
        seconds: 45
    }, {
        name: "Plank",
        categories: ["Core"],
        description: "Lie facedown with forearms on the floor and hands clasped. Extend legs behind you and rise up on toes. Keeping back straight, tighten core and hold the position for 30 to 60 seconds (or as long as you can hang).",
        reps: null,
        seconds: 30
    }, {
        name: "Leg Raises",
        categories: ["Core"],
        description: "Lie down on your back and your hands slightly away from your body to support yourself. Lift your legs upwards while keeping them together until your butt has left the floor. Slowly go back to the starting position",
        reps: 5,
        seconds: null
    }, {
        name: "Knees To Elbows Hang",
        categories: ["Core", "Cardio"],
        description: "Grab the bar at shoulder length width and fully extend your arms. Keep your core stable and do your best to not swing around. Slowly bring your knees to your elbows then slowly go back to the starting position",
        reps: 8,
        seconds: null
    }, {
        name: "Jumping Jacks",
        categories: ["Core", "Cardio"],
        description: "Stand upright with your legs together, arm at your sides. Bend your knees slightly and jump into the air. As you jump, spread your legs to be about shoulder-width apart. Stretch your arms out and over your head. Jump back to the starting position",
        reps: null,
        seconds: 45
    }, {
        name: "Bicycle Crunches",
        categories: ["Core"],
        description: "Lie faceup with your legs up, knees bent 90 degrees and stacked over your hips. Place your hands behind your head, elbows bent and pointing out to the sides. Use your abs to curl your shoulders off the floor. Twist to bring your right elbow to the left knee while straightening your right leg. Then twist to bring your left elbow to your right knee while straightening your left leg.",
        reps: null,
        seconds: 45
    }, {
        name: "Burpees",
        categories: ["Core", "Cardio", "Lower Body"],
        description: "Start in a low squat position with your hands on the floor. Next, kick your feet back to a push-up position. Complete one push- up, then immediately return your feet to the squat position. Leap up as high as possible before squatting and moving back into the push - up portion of the show.",
        reps: 5,
        seconds: null
    }, {
        name: "Hanging Knee Tucks",
        categories: ["Core", "Upper Body"],
        description: "Hang from a pull up bar or somewhere to hang from and tuck your knees into your chests.",
        reps: null,
        seconds: 20
    }, {
        name:"Russian Twist",
        categories: ["Core"],
        description: "First, sit with your feet straight on the floor. Then bend your knees and make a ninety-degree angle. Then lift your legs up, hold the palm of your one hand with the other and twist your body left and right. Try not to move your head too much",
        reps: 10,
        seconds: null
    }, {
        name: "Jumping Knee Tucks",
        categories: ["Lower Body"],
        description: "Jump in place using your arms to stablize yoruself. Make sure your knees are brought as high as possible. The best is if your knees touch your elbows.",
        reps: null,
        seconds: 45
    }, {
        name: "Wall Sits",
        categories: ["Lower Body"],
        description: "Slowly slide your back down a wall until your thighs are parallel to the floor. Make sure knees are directly above ankles and keep back straight.",
        reps: null,
        seconds: 30
    }, {
        name: "Lunges",
        categories: ["Lower Body"],
        description: "Stand with hands on hips and feet hip-width apart. Step your right leg forward and slowly lower your body until left (back) knee is close to or touching the floor and bent at least 90 degrees. Return to the starting position and repeat on the other side.",
        reps: 10,
        seconds: null
    }, {
        name: "Squats",
        categories: ["Lower Body"],
        description: "Stand with feet parallel or turned out 15 degrees — whatever is most comfortable. Slowly start to crouch by bending hips and knees until thighs are at least parallel to the floor. Make sure your heels do not rise off the floor.Press through your heels to return to a standing position.",
        reps: 10,
        seconds: null
    }, {
       name: "Step Up to Chair",
       categories: ["Lower Body"],
       description: "Find a bench or a surface similar to the level of a bench. Put your hands on your waist, and step up onto the surface. Step back down and alternate your legs.",
       reps: 10,
       seconds: null
    }, {
         name: "Donkey Kicks",
         categories: ["Lower Body"],
         description: "Get on all fours on the ground as a donkey would. Now choose which leg does the kicking first. To kick, just lift that leg up, maintaining the 90-degree angle between your thigh and eg. Put the leg down to the starting position. Repeat until done with reps",
         reps: 8,
         seconds: null,
    }, {
        name: "Jump Rope",
        categories: ["Cardio"],
        description: "Bring a jump rope with you. To jump rope, hold the rope on both hands and have the rope hang at your heels. Throw the rope towards the front in a circular arc and jump with both feet before the rope reaches your legs",
        reps: 10,
        seconds: null
    }, {
        name: "Run",
        categories: ["Cardio"],
        description: "Make sure you are alternating your arm swing while running. Make sure you are choosing a speed in which you can maintain for the set amount of time. ",
        reps: null,
        seconds: 180
    },{
        name: "Butt Kicks",
        categories: ["Cardio", "Lower Body"],
        description: "Stand up straight. Create a loose fist and pump your fist up like you're jogging. Kick your heels up to touch or nearly touch your butt.",
        reps: null,
        seconds: 180
    },{
        name: "Calf Raises",
        categories: ["Lower Body"],
        description: "From a standing position, slowly rise up on your toes, keeping knees straight and heels off the floor. Hold briefly, then come back down.",
        reps: 10,
        seconds: null,
    },{
        name: "Arm Circles",
        categories: ["Upper Body"],
        description: "Stand with arms extended by your sides, perpendicular to your torso. Slowly make clockwise circles about 1 foot in diameter for the time given. Then do it counterclockwise for the same time.",
        reps: null,
        seconds: 20,
    },{
        name: "Side Planks",
        categories: ["Core"],
        description: "Lie faceup and roll to the side. Come up onto one foot and elbow. Make sure your hips are lifted and your core is engaged. Hang tight for the allotted time.",
        reps: null,
        seconds: 30,
    },{
        name: "Shoulder Bridges",
        categories: ["Core"],
        description: "Lie faceup with knees bent and feet hip-width apart. Place arms at your sides and lift your spine and hips. Only your head, feet, arms, and shoulders should be on the floor. Life one leg, keeping your core tight. Slowly bring leg back down, then lift back up. Try to do the reps for each leg, then lower your spine back onto the floor.",
        reps: 10,
        seconds: null,
    },{
        name: "Superman Holds with Squeeze",
        categories: ["Upper Body"],
        description: "Lie face down on a soft surface. Hold arms out to sides at shoulder-height, thumbs facing up. Lift chest, arms, and legs off ground simultaneously. Pause, then lower it. Do this for the reps shown below",
        reps: 10,
        seconds: null,
    },{
        name: "Plank Ups",
        categories: ["Upper Body"],
        description: "Start in a forearm plank. Keeping abs tight and spine long, pick up right arm and right palm on ground. Repeat on left side, ending up in a high-plank position. Now reverse the movement, replacing right palm with right elbow and left palm with left elbow.",
        reps: 10,
        seconds: null,
    },{
        name: "Mountain Climbers",
        categories: ["Core", "Cardio"],
        description: "Assume a high plank position, hands beneath shoulders, body forming a straight line parallel to the floo. Drive right knee toward chest. As you return right leg to starting position, drive left knee toward chest. Continue to alternate as fast as possible without stopping.",
        reps: 15,
        seconds: null,
    },{
        name: "High Knees",
        categories: ["Cardio", "Lower Body"],
        description: "Start standing with both hands held out, palms down. Drive right knee to right palm. Immediately drive left knee to left palm as you return right leg to starting position. Stay light on your toes and the balls of your feet. Continue to repeat as fast as possible.",
        reps: 10,
        seconds: null,
    }]

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
    return exercises.length;
}
