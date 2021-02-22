const app = Vue.createApp({
  data() {
    return {
      friends: [
        {
          id: 'tej',
          name: 'Tej Hirpara',
          phone: '01234 5678 991',
          email: 'tej@localhost.com',
        },
        {
          id: 'abc',
          name: 'xyz',
          phone: '09876 543 221',
          email: 'klm@localhost.com',
        },
      ],
    };
  },
});

app.component('friend-contact', {
  template: `
  <li>
    <h2>{{ friend.name }}</h2>
    <button @click="toggleDetails()">
      {{ detailsAreVisible ? 'Hide' : 'Show' }} Details
    </button>
    <ul v-if="detailsAreVisible">
      <li><strong>Phone:</strong> {{ friend.phone }}</li>
      <li><strong>Email:</strong> {{ friend.email }}</li>
    </ul>
  </li>
  `,
  data() {
    return {
      detailsAreVisible: false,
      friend: {
        id: 'tej',
        name: 'Tej Hirpara',
        phone: '01234 5678 991',
        email: 'tej@localhost.com',
      },
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
  },
});

app.mount('#app');
