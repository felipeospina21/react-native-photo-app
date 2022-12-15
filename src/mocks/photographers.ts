interface Photographer {
  isPro: boolean;
  email: string;
  title: string;
  location: {
    latitude: number;
    longitude: number;
  };
  img: string;
}
export const photographers: Photographer[] = [
  {
    isPro: false,
    email: 'email@email.com',
    title: 'title',
    location: {
      latitude: 37.46983956800143,
      longitude: -122.140482410822,
    },
    img: 'https://i.guim.co.uk/img/media/26392d05302e02f7bf4eb143bb84c8097d09144b/446_167_3683_2210/master/3683.jpg?width=1200&quality=85&auto=format&fit=max&s=a52bbe202f57ac0f5ff7f47166906403',
  },
  {
    isPro: false,
    email: 'email@email.com',
    title: 'title',
    location: {
      latitude: 37.459211849710826,
      longitude: -122.10752342621889,
    },
    img: 'https://i.guim.co.uk/img/media/26392d05302e02f7bf4eb143bb84c8097d09144b/446_167_3683_2210/master/3683.jpg?width=1200&quality=85&auto=format&fit=max&s=a52bbe202f57ac0f5ff7f47166906403',
  },
  {
    isPro: true,
    email: 'email@email.com',
    title: 'title',
    location: {
      latitude: 37.416685871717355,
      longitude: -122.15833519414868,
    },
    img: 'https://i.guim.co.uk/img/media/26392d05302e02f7bf4eb143bb84c8097d09144b/446_167_3683_2210/master/3683.jpg?width=1200&quality=85&auto=format&fit=max&s=a52bbe202f57ac0f5ff7f47166906403',
  },
  {
    isPro: false,
    email: 'email@email.com',
    title: 'title',
    location: {
      latitude: 37.38341153910444,
      longitude: -122.04400871622107,
    },
    img: 'https://i.guim.co.uk/img/media/26392d05302e02f7bf4eb143bb84c8097d09144b/446_167_3683_2210/master/3683.jpg?width=1200&quality=85&auto=format&fit=max&s=a52bbe202f57ac0f5ff7f47166906403',
  },
  {
    isPro: true,
    email: 'email@email.com',
    title: 'title',
    location: {
      latitude: 37.529217959820656,
      longitude: -122.0268425790414,
    },
    img: 'https://i.guim.co.uk/img/media/26392d05302e02f7bf4eb143bb84c8097d09144b/446_167_3683_2210/master/3683.jpg?width=1200&quality=85&auto=format&fit=max&s=a52bbe202f57ac0f5ff7f47166906403',
  },
];
