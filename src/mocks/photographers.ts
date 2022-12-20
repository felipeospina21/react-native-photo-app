export interface Photographer {
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
    img: 'https://media.wired.co.uk/photos/60c8730fa81eb7f50b44037e/16:9/w_2560%2Cc_limit/1521-WIRED-Cat.jpeg',
  },
  {
    isPro: true,
    email: 'email@email.com',
    title: 'title',
    location: {
      latitude: 37.416685871717355,
      longitude: -122.15833519414868,
    },
    img: 'https://i.etsystatic.com/6230905/r/il/7dc2f2/3288519542/il_570xN.3288519542_587o.jpg',
  },
  {
    isPro: false,
    email: 'email@email.com',
    title: 'title',
    location: {
      latitude: 37.38341153910444,
      longitude: -122.04400871622107,
    },
    img: 'https://pbs.twimg.com/profile_images/1080545769034108928/CEzHCTpI_400x400.jpg',
  },
  {
    isPro: true,
    email: 'email@email.com',
    title: 'title',
    location: {
      latitude: 37.529217959820656,
      longitude: -122.0268425790414,
    },
    img: 'https://media.istockphoto.com/id/1141152348/photo/cat-with-lasers-from-eyes-minimal-collage-fashion-concept.jpg?s=612x612&w=0&k=20&c=032mYmlK7a5YOCriW36UY-vPFA0ugY2gMeXtm1UKTEk=',
  },
];
