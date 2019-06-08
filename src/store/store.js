import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    scores: [
      { name: 'advik', score: 0 },
      { name: 'jake', score: 0 },
      { name: 'mel', score: 0 },
      { name: 'kaya', score: 0 }
    ],
    questionsAnswered: 0,
    students: [
      {
        id: 1,
        name: 'Advik',
        age: '19',
        studying: 'Physiotherapy',
        catchphrase: 'Sounds good! Let me revise for one more hour and then I’ll come join you!',
        profile: 'Advik’s an all-round nice guy and likes to balance his studies with opportunities to build friendships. ' +
                 'His mild manner sometimes means that he doesn’t speak up about things that bother him. ' +
                 'He’s the unofficial ‘counsellor’ who everyone goes to with their worries and knows they’ll get care and support. ' +
                 'He manages money well and does more than his share of the chores, without complaint.',
        result: 'You strike a good balance between your studies and opportunities to socialise and have fun. ' +
                'You’re considerate of others. In fact, you’re so nice that you sometimes find it difficult to speak up about something that bothers you. ' +
                'Remember that it’s important to get any problems out in the open, or they can escalate. ',
        image: require('@/assets/images/students/advik-1.png'),
        frame: require('@/assets/images/phone/advik.png'),
        video: '/static/videos/ADVIK1.mp4'
      },
      {
        id: 2,
        name: 'Mel',
        age: '20',
        studying: 'Civil Engineering',
        catchphrase: 'Sorry, I’ve got a big exam coming up, so I can’t really hang out with you guys.',
        profile: 'Mel’s nice enough but the other flatmates don’t see much of her. ' +
                 'She’s at university to study, not to make friends. ' +
                 'But she’s super-organised and seen as the first port of call when something practical needs to get done. ' +
                 'She’s sensible with money (in fact, she keeps a spreadsheet of expenses) and likes to keep the place clean and tidy.',
        result: 'You’re dedicated to your studies and prefer to focus on them rather than socialising. ' +
                'Remember that friendship and support can help to motivate you and help you face any challenges. ' +
                'Try to create a comfortable balance between work and play.',
        image: require('@/assets/images/students/mel-1.png'),
        frame: require('@/assets/images/phone/mel.png'),
        video: '/static/videos/MEL1.mp4'
      },
      {
        id: 3,
        name: 'Jake',
        age: '19',
        studying: 'Drama',
        catchphrase: 'Come on, even C’s get degrees. I’m going clubbing!',
        profile: 'Jake is the ultimate social animal. Whether he’s drinking in the local bars or at home, he takes the party wherever he goes. ' +
                 'What he lacks in tidiness, organisation and money management, he makes up for in heart. ' +
                 'He’s the first to apologise if he has upset someone. ' +
                 'He’s pretty easy-going and gets on well with everyone – but can’t seem to build a relationship with his textbooks!',
        result: 'You love to party and don’t let things like studying get in the way of your ability to have a good time. ' +
                'But you also care about others and hate the thought of offending anyone. ' +
                'Remember that, while there’s definitely time for socialising, students also need a good chunk of quiet study time. ' +
                'Try to create a comfortable balance between work and play.',
        image: require('@/assets/images/students/jake-1.png'),
        frame: require('@/assets/images/phone/jake.png'),
        video: '/static/videos/JAKE1.mp4'
      },
      {
        id: 4,
        name: 'Kaya',
        age: '18',
        studying: 'Law',
        catchphrase: 'I want it all – high-flying career, big car, luxury flat. And I’m willing to work hard to make sure I get it.',
        profile: 'Kaya doesn’t exactly enjoy studying but she’s focused on her degree and determined to stop at nothing to reach her goals. ' +
                 'This sometimes means she doesn’t make time to do other things like chores or keep track of her spending. ' +
                 'She loves going out and being centre of attention, but she’s often absorbed in her own world, daydreaming about what the future holds and what sort of a lawyer she will be.',
        result: 'You’re very focused on your goals and you do everything you can to achieve them. ' +
                'Remember that having a happy, comfortable living environment can help you feel more relaxed and able to concentrate. ' +
                'It’s important to consider others as well as yourself.',
        image: require('@/assets/images/students/kaya-1.png'),
        frame: require('@/assets/images/phone/kaya.png'),
        video: '/static/videos/KAYA1.mp4'
      }
    ],
    rooms: [
      {
        id: 1,
        name: 'communual-area'
      },
      {
        id: 2,
        name: 'bedroom'
      },
      {
        id: 3,
        name: 'kitchen'
      }
    ],
    questions: [
      {
        id: 1, // Unique ID
        room: 1, // Communual Area
        relativeID: 1, // ID Relative to the room
        answered: false,
        answer: 0,
        question: 'Your flatmates invite you out for dinner, but you don’t have enough money. What do you do?',
        answers: [
          {
            id: 1,
            student: 'mel',
            weight: 1,
            text: 'Tell your flatmates to have fun, but stay in. You didn’t really want to go – you’ve a load of work to do and would rather save the money for emergencies.',
            feedback: '/static/videos/MEL2.mp4'
          },
          {
            id: 2,
            student: 'kaya',
            weight: 1,
            text: 'Go out anyway. You can’t afford it, but there’s no way you’re gonna be passing up this night out, so you put it on the credit card.',
            feedback: '/static/videos/KAYA2.mp4'
          },
          {
            id: 3,
            student: 'jake',
            weight: 1,
            text: 'Ask your flatmates if you can borrow some money. You can always pay them back later when your student loan comes through, you’d be gutted to miss a night out.',
            feedback: '/static/videos/JAKE2.mp4'
          },
          {
            id: 4,
            student: 'advik',
            weight: 1,
            text: 'Politely decline because you don’t like spending money you don’t have, but offer up an alternative idea: You suggest a flat meal – everybody has a bit of food that you can cook up and maybe have some drinks with. That way, you don’t miss out and nobody needs to worry about money.',
            feedback: '/static/videos/ADVIK2.mp4'
          }
        ],
        tip: 'Most students live on a budget. One of the best things you can do is to create your own budget sheet showing when you’ll receive money and how much you spend.' + '\n\n' +
             'You can set up direct debits, so that important payments like rent and bills come out automatically; then you’ll know how much you have left for other things. Work out how much you’ve got per week and don’t overspend.' + '\n\n' +
             'There are lots of discounts offered to students – it’s worth researching what’s available in your local area. And shop around for the best deal.'
      },
      {
        id: 2, // Unique ID
        room: 1, // Communual Area
        relativeID: 2, // ID Relative to the room
        answered: false,
        answer: 0,
        question: 'Your flatmate is stressed out about their coursework. They keep shutting themselves away in their room. What do you do?',
        answers: [
          {
            id: 1,
            student: 'mel',
            weight: 1,
            text: 'Suggest that you study together and test each other on your coursework. Sometimes having a study buddy can make the learning easier.',
            feedback: '/static/videos/MEL4.mp4'
          },
          {
            id: 2,
            student: 'kaya',
            weight: 1,
            text: 'Ignore them. What they choose to do is their business. You need to concentrate on your own exams.',
            feedback: '/static/videos/KAYA4.mp4'
          },
          {
            id: 3,
            student: 'jake',
            weight: 1,
            text: 'Go in there and drag them out to a party. You’re sure they just need to lighten up a bit.',
            feedback: '/static/videos/JAKE4.mp4'
          },
          {
            id: 4,
            student: 'advik',
            weight: 1,
            text: 'Bring them a hot cup of tea and see if they feel like chatting about the things that are bothering them. It might help them to talk.',
            feedback: '/static/videos/ADVIK4.mp4'
          }
        ],
        tip: 'Everyone gets stressed, anxious or depressed at times. These moments can be particularly challenging if you’re living away from home for the first time.' + '\n\n' +
             'The great thing about flatmates is that there’s support close at hand. Talk about your feelings. Chances are that others are going through the same thing, and you can show each other support.' + '\n\n' +
             'Most universities also have people you can go to see for advice and support so it’s always worth checking this option out if you are struggling a bit.'
      },
      {
        id: 3, // Unique ID
        room: 2, // Bedroom
        relativeID: 1, // ID Relative to the room
        answered: false,
        answer: 0,
        question: 'You’re trying to study for an exam in the morning, but your flatmate has friends over and they’re playing music and messing around in the kitchen, being really loud. What do you do?',
        answers: [
          {
            id: 1,
            student: 'mel',
            weight: 1,
            text: 'Grab your flatmate and politely ask him to get his friends to keep the noise down. They should understand the importance of exams and the need for quiet study time.',
            feedback: '/static/videos/MEL3.mp4'
          },
          {
            id: 2,
            student: 'kaya',
            weight: 1,
            text: 'Go into the kitchen and ask everyone to leave. This is your space and they can make noise in their own flat.',
            feedback: '/static/videos/KAYA3.mp4'
          },
          {
            id: 3,
            student: 'jake',
            weight: 1,
            text: 'Go into the kitchen and join them. You can just do a bit of binge-revision tomorrow morning before the exam.',
            feedback: '/static/videos/JAKE3.mp4'
          },
          {
            id: 4,
            student: 'advik',
            weight: 1,
            text: 'Put in some headphones. They don’t completely stop the noise, but you find it a bit easier to concentrate.',
            feedback: '/static/videos/ADVIK3.mp4'
          }
        ],
        tip: 'Communication is the golden rule.' + '\n\n' +
             'It’s always best to talk about any problems that arise. Study time is crucial in any student flat, and others should respect when someone has pending assignments or exams. You’ll all go through it!' + '\n\n' +
             'Politely let your flatmates know when you’ve got important course dates coming up, so they can avoid organising loud gatherings and give you the time you need to concentrate on doing your best.'
      },
      {
        id: 4, // Unique ID
        room: 3, // Kitchen
        relativeID: 1, // ID Relative to the room
        answered: false,
        answer: 0,
        question: 'The kitchen’s a mess and there’s a note on the fridge saying, ‘Stop stealing my milk!!!!’. What do you do?',
        answers: [
          {
            id: 1,
            student: 'mel',
            weight: 1,
            text: 'Call a meeting with everyone to talk through the problem suggesting putting together a roster showing when each flatmate is responsible for kitchen-cleaning and milk-buying duties.',
            feedback: '/static/videos/MEL5.mp4'
          },
          {
            id: 2,
            student: 'kaya',
            weight: 1,
            text: 'Leave it and go out for dinner instead.',
            feedback: '/static/videos/KAYA5.mp4'
          },
          {
            id: 3,
            student: 'jake',
            weight: 1,
            text: 'Ignore it and make dinner. Most of the mess is probably yours anyway.',
            feedback: '/static/videos/JAKE5.mp4'
          },
          {
            id: 4,
            student: 'advik',
            weight: 1,
            text: 'Quickly give the kitchen a good clean and then pop out to the shops to buy a large milk – enough for everyone to share.',
            feedback: '/static/videos/ADVIK5.mp4'
          }
        ],
        tip: 'Some of us find it easier to be tidier than others.' + '\n\n' +
             'But when you live with others you need to make a bit more effort to keep the communal areas clean and enjoyable places to be.' + '\n\n' +
             'Speak with your flatmates and agree how you want to organise your shared space. It can help to set some ‘house rules’ at the beginning so everyone knows what the expectation is and encourage everyone to follow them – even guests.'
      },
      {
        id: 5, // Unique ID
        room: 3, // Kitchen
        relativeID: 2, // ID Relative to the room
        answered: false,
        answer: 0,
        question: 'When you first moved in, all the flatmates ate dinner together and had a laugh, but now people have gone off in their own little groups. You’re feeling a bit lonely. What do you do?',
        answers: [
          {
            id: 1,
            student: 'mel',
            weight: 1,
            text: 'It doesn’t really bother you. You need to focus on getting some coursework done, so you decide to throw yourself into that.',
            feedback: '/static/videos/MEL6.mp4'
          },
          {
            id: 2,
            student: 'kaya',
            weight: 1,
            text: 'Ignore the situation. Go out and meet up with other friends instead.',
            feedback: '/static/videos/KAYA6.mp4'
          },
          {
            id: 3,
            student: 'jake',
            weight: 1,
            text: 'Organise a flat party to bring all your flatmates together again. In fact, why not invite a few other friends from uni too – the more the merrier!',
            feedback: '/static/videos/JAKE6.mp4'
          },
          {
            id: 4,
            student: 'advik',
            weight: 1,
            text: 'Cook a delicious dinner for everyone – surely the best way to coax everyone out of their rooms.',
            feedback: '/static/videos/ADVIK6.mp4'
          }
        ],
        tip: 'It can be common for students to experience loneliness and feelings of isolation, especially if family and friends from school are far away.' + '\n\n' +
             'Talk to others regularly and try to make sure everyone feels welcome and included. Just because someone didn’t want to join in the socialising last time doesn’t mean it will always be the case.' + '\n\n' +
             'Don’t be afraid to ask for help or support when you need it. And keep an eye out for anyone else who seems to be going through a rough time.'
      }
    ]
  },
  mutations: {
    saveAnswer (state, payload) {
      const q = this.getters.getCurrentQuestion(payload[0])
      q.answered = true
      q.answer = payload[1]
      console.log('Answer ID: ' + q.answer)
    },
    incrementQuestionsAnswered (state) {
      state.questionsAnswered++
      console.log('Questions Answered: ' + state.questionsAnswered)
    },
    updateScore (state, payload) {
      const student = this.getters.getScoreByName(payload[0])
      student.score += payload[1]
      console.log('Student Response: ' + student.name)
    }
  },
  methods: {
  },
  getters: {
    getQuestionsAnswered: state => state.questionsAnswered,
    // Score Getters
    getScore: state => state.scores,
    getScoreByName: state => payload => state.scores.find(score => score.name === payload),
    // Student Getters
    getStudents: state => state.students,
    getStudent: state => payload => state.students.find(student => student.id === payload),
    getStudentByName: state => payload => state.students.find(student => student.name === payload),
    // Room Getters
    getRooms: state => state.rooms,
    getRoom: state => payload => state.rooms.find(room => room.id === payload),
    getRoomByName: state => payload => state.rooms.find(room => room.name === payload),
    // Question Getters
    getQuestions: state => state.questions,
    getRoomQuestions: state => payload => state.questions.filter(question => question.room === payload),
    getCurrentQuestion: state => payload => state.questions.find(question => question.id === payload)
  },
  actions: {
    saveAnswer ({ commit }, payload) {
      commit('saveAnswer', payload)
    },
    incrementQuestionsAnswered ({ commit }) {
      commit('incrementQuestionsAnswered')
    },
    updateScore ({ commit }, payload) {
      commit('updateScore', payload)
    }
  }
})
