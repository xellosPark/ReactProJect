import Customer from "./components/Customer";

function App() {
  const customers = [{
    'id': 1,
    // image randem function free
    'image' : 'https://placeimg.com/64/64/1',
    'name' : '홍기동',
    'birthday' : '20150102',
    'gender' : '남자',
    'job' : '회사원'
  },
  {
    'id': 2,
    'image' : 'https://placeimg.com/64/64/2',
    'name'  : '김종국',
    'birthday' : '19790501',
    'gender' : '남자',
    'job' : '개그맨'
  },
  {
    'id': 3,
    'image' : 'https://placeimg.com/64/64/3',
    'name'  : '송지호',
    'birthday' : '19800325',
    'gender' : '여자',
    'job' : '연기자'
  },
  {
    'id': 4,
    'image' : 'https://placeimg.com/64/64/4',
    'name'  : '유재석',
    'birthday' : '19710915',
    'gender' : '남자',
    'job' : '개그맨'
  },
  {
    'id': 5,
    'image' : 'https://placeimg.com/64/64/any',
    'name'  : '전유진',
    'birthday' : '20100707',
    'gender' : '여자',
    'job' : '가수'
  }
  ]

  return (
    <div>
      {
        customers.map( User => {
          return (
          // map 사용시 키값 정의 필수
          <Customer key = {User.id} id={User.id} image={User.image} name={User.name}
           birthday={User.birthday} gender={User.gender} job={User.job} />);
        })
      }
      {/* <Customer
        id={customers[0].id}
        image={customers[0].image}
        name={ customers[0].name }
        birthday={ customers[0].birthday }
        gender={ customers[0].gender }
        job={ customers[0].job }
      /> */}
    </div>
  );
}

export default App;
