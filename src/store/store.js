import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {
      score: 0
    },
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
        image: require('@/assets/images/students/advik-1.png'),
        video: require('@/assets/videos/advik/advik-1.mp4')
      },
      {
        id: 2,
        name: 'Jake',
        age: '19',
        studying: 'Drama',
        catchphrase: 'Sorry, I’ve got a big exam coming up, so I can’t really hang out with you guys.',
        profile: 'Jake is the ultimate social animal. Whether he’s drinking in the local bars or at home, he takes the party wherever he goes. ' +
                 'What he lacks in tidiness, organisation and money management, he makes up for in heart. ' +
                 'He’s the first to apologise if he has upset someone. ' +
                 'He’s pretty easy-going and gets on well with everyone – but can’t seem to build a relationship with his textbooks! ',
        image: require('@/assets/images/students/jake-1.png'),
        video: require('@/assets/videos/jake/jake-1.mp4')
      },
      {
        id: 3,
        name: 'Mel',
        age: '20',
        studying: 'Civil Engineering',
        catchphrase: 'Come on, even C’s get degrees. I’m going clubbing!',
        profile: 'Mel’s nice enough but the other flatmates don’t see much of her. ' +
                 'She’s at university to study, not to make friends. ' +
                 'But she’s super-organised and seen as the first port of call when something practical needs to get done. ' +
                 'She’s sensible with money (in fact, she keeps a spreadsheet of expenses) and likes to keep the place clean and tidy. ',
        image: require('@/assets/images/students/mel-1.png'),
        video: require('@/assets/videos/mel/mel-1.mp4')
      },
      {
        id: 4,
        name: 'Kaya',
        age: '18',
        studying: 'Law',
        catchphrase: 'I want it all – high-flying career, big car, luxury flat. And I’m willing to work hard to make sure I get it.',
        profile: 'Kaya doesn’t exactly enjoy studying but she’s focused on her degree and determined to stop at nothing to reach her goals. ' +
                 'This sometimes means she doesn’t make time to do other things like chores or keep track of her spending. ' +
                 'She loves going out and being centre of attention, but she’s often absorbed in her own world, daydreaming about what the future holds and what sort of a lawyer she will be. ',
        image: require('@/assets/images/students/kaya-1.png'),
        video: require('@/assets/videos/kaya/kaya-1.mp4')
      }
    ]
  },
  mutations: {

  },
  methods: {

  },
  getters: {
    getStudents: state => state.students,
    getStudent: state => payload => state.students.find(student => student.id === payload),
    getStudentByName: state => payload => state.students.find(student => student.name === payload)
  },
  actions: {

  }
})
