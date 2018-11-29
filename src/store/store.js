import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {
      score: {
        advik: 0,
        jake: 0,
        mel: 0,
        kaya: 0
      }
    },
    students: [
      {
        id: 1,
        name: 'advik',
        age: '19',
        studying: 'Physiotherapy',
        catchphrase: 'Sounds good! Let me revise for one more hour and then I’ll come join you!',
        profile: 'Advik’s an all-round nice guy and likes to balance his studies with opportunities to build friendships. ' +
                 'His mild manner sometimes means that he doesn’t speak up about things that bother him. ' +
                 'He’s the unofficial ‘counsellor’ who everyone goes to with their worries and knows they’ll get care and support. ' +
                 'He manages money well and does more than his share of the chores, without complaint.',
        image: require('@/assets/images/students/advik-1.png')
        // video: require('@/assets/videos/advik/advik-1.mp4')
      },
      {
        id: 2,
        name: 'jake',
        age: '19',
        studying: 'Drama',
        catchphrase: 'Sorry, I’ve got a big exam coming up, so I can’t really hang out with you guys.',
        profile: 'Jake is the ultimate social animal. Whether he’s drinking in the local bars or at home, he takes the party wherever he goes. ' +
                 'What he lacks in tidiness, organisation and money management, he makes up for in heart. ' +
                 'He’s the first to apologise if he has upset someone. ' +
                 'He’s pretty easy-going and gets on well with everyone – but can’t seem to build a relationship with his textbooks!',
        image: require('@/assets/images/students/jake-1.png')
        // video: require('@/assets/videos/jake/jake-1.mp4')
      },
      {
        id: 3,
        name: 'mel',
        age: '20',
        studying: 'Civil Engineering',
        catchphrase: 'Come on, even C’s get degrees. I’m going clubbing!',
        profile: 'Mel’s nice enough but the other flatmates don’t see much of her. ' +
                 'She’s at university to study, not to make friends. ' +
                 'But she’s super-organised and seen as the first port of call when something practical needs to get done. ' +
                 'She’s sensible with money (in fact, she keeps a spreadsheet of expenses) and likes to keep the place clean and tidy.',
        image: require('@/assets/images/students/mel-1.png')
        // video: require('@/assets/videos/mel/mel-1.mp4')
      },
      {
        id: 4,
        name: 'kaya',
        age: '18',
        studying: 'Law',
        catchphrase: 'I want it all – high-flying career, big car, luxury flat. And I’m willing to work hard to make sure I get it.',
        profile: 'Kaya doesn’t exactly enjoy studying but she’s focused on her degree and determined to stop at nothing to reach her goals. ' +
                 'This sometimes means she doesn’t make time to do other things like chores or keep track of her spending. ' +
                 'She loves going out and being centre of attention, but she’s often absorbed in her own world, daydreaming about what the future holds and what sort of a lawyer she will be.',
        image: require('@/assets/images/students/kaya-1.png')
        // video: require('@/assets/videos/kaya/kaya-1.mp4')
      }
    ],
    rooms: [
      {
        id: 1,
        name: 'communual-area',
        questions: [
          {
            id: 1,
            question: 'Your flatmates invite you out for dinner, but you don’t have enough money. What do you do?',
            answers: [
              {
                id: 1,
                student: 'mel',
                text: 'Politely decline because you don’t like spending money you don’t have, but offer up an alternative idea: You suggest a flat meal – everybody has a bit of food that you can cook up and maybe have some drinks with. That way, you don’t miss out and nobody needs to worry about money.',
                feedback: require('@/assets/videos/feedback/common-area/question-1/mel.jpg')
              },
              {
                id: 2,
                student: 'kaya',
                text: 'Go out anyway. You can’t afford it, but there’s no way you’re gonna be passing up this night out, so you put it on the credit card.',
                feedback: require('@/assets/videos/feedback/common-area/question-1/kaya.jpg')
              },
              {
                id: 3,
                student: 'jake',
                text: 'Tell your flatmates to have fun, but stay in. You didn’t really want to go – you’ve a load of work to do and would rather save the money for emergencies.',
                feedback: require('@/assets/videos/feedback/common-area/question-1/jake.jpg')
              },
              {
                id: 4,
                student: 'advik',
                text: 'Ask your flatmates if you can borrow some money. You can always pay them back later when your student loan comes through, you’d be gutted to miss a night out.',
                feedback: require('@/assets/videos/feedback/common-area/question-1/advik.jpg')
              }
            ],
            tip: 'Most students live on a budget. One of the best things you can do is to create your own budget sheet showing when you’ll receive money and how much you spend.' + '\n\n' +
                 'You can set up direct debits, so that important payments like rent and bills come out automatically; then you’ll know how much you have left for other things. Work out how much you’ve got per week and don’t overspend.' + '\n\n' +
                 'There are lots of discounts offered to students – it’s worth researching what’s available in your local area. And shop around for the best deal.'
          },
          {
            id: 2,
            question: 'Your flatmate is stressed out about their coursework. They keep shutting themselves away in their room. What do you do?',
            answers: [
              {
                id: 1,
                student: 'mel',
                text: 'Go in there and drag them out to a party. You’re sure they just need to lighten up a bit.',
                feedback: require('@/assets/videos/feedback/common-area/question-2/mel.jpg')
              },
              {
                id: 2,
                student: 'kaya',
                text: 'Suggest that you study together and test each other on your coursework. Sometimes having a study buddy can make the learning easier.',
                feedback: require('@/assets/videos/feedback/common-area/question-2/kaya.jpg')
              },
              {
                id: 3,
                student: 'jake',
                text: 'Bring them a hot cup of tea and see if they feel like chatting about the things that are bothering them. It might help them to talk.',
                feedback: require('@/assets/videos/feedback/common-area/question-2/jake.jpg')
              },
              {
                id: 4,
                student: 'advik',
                text: 'Ignore them. What they choose to do is their business. You need to concentrate on your own exams.',
                feedback: require('@/assets/videos/feedback/common-area/question-2/advik.jpg')
              }
            ],
            tip: 'Everyone gets stressed, anxious or depressed at times. These moments can be particularly challenging if you’re living away from home for the first time.' + '\n\n' +
                 'The great thing about flatmates is that there’s support close at hand. Talk about your feelings. Chances are that others are going through the same thing, and you can show each other support.' + '\n\n' +
                 'Most universities also have people you can go to see for advice and support so it’s always worth checking this option out if you are struggling a bit.'
          }
        ]
      },
      {
        id: 2,
        name: 'bedroom',
        questions: [
          {
            id: 1,
            question: 'You’re trying to study for an exam in the morning, but your flatmate has friends over and they’re playing music and messing around in the kitchen, being really loud. What do you do?',
            answers: [
              {
                id: 1,
                student: 'mel',
                text: 'Put in some headphones. They don’t completely stop the noise, but you find it a bit easier to concentrate.',
                feedback: require('@/assets/videos/feedback/bedroom/question-1/mel.jpg')
              },
              {
                id: 2,
                student: 'kaya',
                text: 'Grab your flatmate and politely ask him to get his friends to keep the noise down. They should understand the importance of exams and the need for quiet study time.',
                feedback: require('@/assets/videos/feedback/bedroom/question-1/kaya.jpg')
              },
              {
                id: 3,
                student: 'jake',
                text: 'Go into the kitchen and join them. You can just do a bit of binge-revision tomorrow morning before the exam.',
                feedback: require('@/assets/videos/feedback/bedroom/question-1/jake.jpg')
              },
              {
                id: 4,
                student: 'advik',
                text: 'Go into the kitchen and ask everyone to leave. This is your space and they can make noise in their own flat.',
                feedback: require('@/assets/videos/feedback/bedroom/question-1/advik.jpg')
              }
            ],
            tip: 'Communication is the golden rule.' + '\n\n' +
                 'It’s always best to talk about any problems that arise. Study time is crucial in any student flat, and others should respect when someone has pending assignments or exams. You’ll all go through it!' + '\n\n' +
                 'Politely let your flatmates know when you’ve got important course dates coming up, so they can avoid organising loud gatherings and give you the time you need to concentrate on doing your best.'
          }
        ]
      },
      {
        id: 3,
        name: 'kitchen',
        questions: [
          {
            id: 1,
            question: 'The kitchen’s a mess and there’s a note on the fridge saying, ‘Stop stealing my milk!!!!’. What do you do?',
            answers: [
              {
                id: 1,
                student: 'mel',
                text: 'Quickly give the kitchen a good clean and then pop out to the shops to buy a large milk – enough for everyone to share.',
                feedback: require('@/assets/videos/feedback/kitchen/question-1/mel.jpg')
              },
              {
                id: 2,
                student: 'kaya',
                text: 'Call a meeting with everyone to talk through the problem suggesting putting together a roster showing when each flatmate is responsible for kitchen-cleaning and milk-buying duties.',
                feedback: require('@/assets/videos/feedback/kitchen/question-1/kaya.jpg')
              },
              {
                id: 3,
                student: 'jake',
                text: 'Ignore it and make dinner. Most of the mess is probably yours anyway.',
                feedback: require('@/assets/videos/feedback/kitchen/question-1/jake.jpg')
              },
              {
                id: 4,
                student: 'advik',
                text: 'Leave it and go out for dinner instead.',
                feedback: require('@/assets/videos/feedback/kitchen/question-1/advik.jpg')
              }
            ],
            tip: 'Some of us find it easier to be tidier than others.' + '\n\n' +
                 'But when you live with others you need to make a bit more effort to keep the communal areas clean and enjoyable places to be.' + '\n\n' +
                 'Speak with your flatmates and agree how you want to organise your shared space. It can help to set some ‘house rules’ at the beginning so everyone knows what the expectation is and encourage everyone to follow them – even guests.'
          },
          {
            id: 2,
            question: 'When you first moved in, all the flatmates ate dinner together and had a laugh, but now people have gone off in their own little groups. You’re feeling a bit lonely. What do you do?',
            answers: [
              {
                id: 1,
                student: 'mel',
                text: 'Organise a flat party to bring all your flatmates together again. In fact, why not invite a few other friends from uni too – the more the merrier!',
                feedback: require('@/assets/videos/feedback/kitchen/question-2/mel.jpg')
              },
              {
                id: 2,
                student: 'kaya',
                text: 'It doesn’t really bother you. You need to focus on getting some coursework done, so you decide to throw yourself into that.',
                feedback: require('@/assets/videos/feedback/kitchen/question-2/kaya.jpg')
              },
              {
                id: 3,
                student: 'jake',
                text: 'Cook a delicious dinner for everyone – surely the best way to coax everyone out of their rooms.',
                feedback: require('@/assets/videos/feedback/kitchen/question-2/jake.jpg')
              },
              {
                id: 4,
                student: 'advik',
                text: 'Ignore the situation. Go out and meet up with other friends instead.',
                feedback: require('@/assets/videos/feedback/kitchen/question-2/advik.jpg')
              }
            ],
            tip: 'It can be common for students to experience loneliness and feelings of isolation, especially if family and friends from school are far away.' + '\n\n' +
                 'Talk to others regularly and try to make sure everyone feels welcome and included. Just because someone didn’t want to join in the socialising last time doesn’t mean it will always be the case.' + '\n\n' +
                 'Don’t be afraid to ask for help or support when you need it. And keep an eye out for anyone else who seems to be going through a rough time.'
          }
        ]
      }
    ]
  },
  mutations: {
    incrementAdvik (state, payload) {
      state.user.score.advik += payload.amount
    },
    incrementJake (state, payload) {
      state.user.score.jake += payload.amount
    },
    incrementMel (state, payload) {
      state.user.score.mel += payload.amount
    },
    incrementKaya (state, payload) {
      state.user.score.kaya += payload.amount
    }
  },
  methods: {

  },
  getters: {
    getScore: state => state.user.score,
    getStudents: state => state.students,
    getStudent: state => payload => state.students.find(student => student.id === payload),
    getStudentByName: state => payload => state.students.find(student => student.name === payload),
    getRooms: state => state.rooms,
    getRoom: state => payload => state.rooms.find(room => room.id === payload)

  },
  actions: {

  }
})
