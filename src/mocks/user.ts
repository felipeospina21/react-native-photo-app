
export interface PhotoMock {
  id: string;
  title: string;
  url: string;
  collection?: string;
}
export interface UserMock {
  name: string;
  lastname: string;
  username: string;
  image: string;
  photos: PhotoMock[];
  followers: string[];
  score: number;
}
export const userMock: UserMock = {
  name: "Lina",
  lastname: 'Rios',
  username: '@lina_rios',
  image: 'https://media.istockphoto.com/id/1141152348/photo/cat-with-lasers-from-eyes-minimal-collage-fashion-concept.jpg?s=612x612&w=0&k=20&c=032mYmlK7a5YOCriW36UY-vPFA0ugY2gMeXtm1UKTEk=',
  photos: [
    {
      id:'e46642cf-b4dc-43b6-bb27-9c89c3490998',
      title: 'Forest',
      url: 'https://images.unsplash.com/photo-1655071516490-1bd37e1e690e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80'
  },
  {
    id:'cb26a001-b21d-472a-aa3e-46eab9384f41',
    title: 'Desert',
    url: 'https://images.unsplash.com/photo-1671154893673-28deb88b34fb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80'
},
{
  id:'10622ed1-68fd-4dcf-ada9-a1cd566eabec',
  title: 'Mountain',
  url: 'https://images.unsplash.com/photo-1671047417610-8d1f6beb773d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
}
  ],
  followers: ['1', '2', '3', '4', '5'],
  score: 35,
}