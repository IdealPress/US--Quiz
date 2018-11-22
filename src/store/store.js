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
        profile: '<p>Advik’s an all-round nice guy and likes to balance his studies with opportunities to build friendships.</p>' +
                 '<p>His mild manner sometimes means that he doesn’t speak up about things that bother him.</p>' +
                 '<p>He’s the unofficial ‘counsellor’ who everyone goes to with their worries and knows they’ll get care and support.</p>' +
                 '<p>He manages money well and does more than his share of the chores, without complaint.</p>',
        image: require('@/assets/images/students/advik-1.png')
      },
      {
        id: 2,
        name: 'Jake',
        age: '19',
        studying: 'Drama',
        catchphrase: 'Sorry, I’ve got a big exam coming up, so I can’t really hang out with you guys.',
        profile: '<p>Jake is the ultimate social animal. Whether he’s drinking in the local bars or at home, he takes the party wherever he goes.</p>' +
                 '<p>What he lacks in tidiness, organisation and money management, he makes up for in heart.</p>' +
                 '<p>He’s the first to apologise if he has upset someone.</p>' +
                 '<p>He’s pretty easy-going and gets on well with everyone – but can’t seem to build a relationship with his textbooks!</p>',
        image: require('@/assets/images/students/jake-1.png')
      },
      {
        id: 3,
        name: 'Mel',
        age: '20',
        studying: 'Civil Engineering',
        catchphrase: 'Come on, even C’s get degrees. I’m going clubbing!',
        profile: '<p>Mel’s nice enough but the other flatmates don’t see much of her.</p>' +
                 '<p>She’s at university to study, not to make friends.</p>' +
                 '<p>But she’s super-organised and seen as the first port of call when something practical needs to get done.</p>' +
                 '<p>She’s sensible with money (in fact, she keeps a spreadsheet of expenses) and likes to keep the place clean and tidy.</p>',
        image: require('@/assets/images/students/mel-1.png')
      },
      {
        id: 4,
        name: 'Kaya',
        age: '18',
        studying: 'Law',
        catchphrase: 'I want it all – high-flying career, big car, luxury flat. And I’m willing to work hard to make sure I get it.',
        profile: '<p>Kaya doesn’t exactly enjoy studying but she’s focused on her degree and determined to stop at nothing to reach her goals.</p>' +
                 '<p>This sometimes means she doesn’t make time to do other things like chores or keep track of her spending.</p>' +
                 '<p>She loves going out and being centre of attention, but she’s often absorbed in her own world, daydreaming about what the future holds and what sort of a lawyer she will be.</p>',
        image: require('@/assets/images/students/kaya-1.png')
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
