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
    <>
      <Customer
        id={customers[0].id}
        image={customers[0].image}
        name={ customers[0].name }
        birthday={ customers[0].birthday }
        gender={ customers[0].gender }
        job={ customers[0].job }
      />
      <Customer
        id={customers[1].id}
        image={customers[1].image}
        name={ customers[1].name }
        birthday={ customers[1].birthday }
        gender={ customers[1].gender }
        job={ customers[1].job }
      />
      <Customer
        id={customers[2].id}
        image={customers[2].image}
        name={ customers[2].name }
        birthday={ customers[2].birthday }
        gender={ customers[2].gender }
        job={ customers[2].job }
      />
       <Customer
        id={customers[3].id}
        image={customers[3].image}
        name={ customers[3].name }
        birthday={ customers[3].birthday }
        gender={ customers[3].gender }
        job={ customers[3].job }
      />
      <Customer
        id={customers[4].id}
        image={customers[4].image}
        name={ customers[4].name }
        birthday={ customers[4].birthday }
        gender={ customers[4].gender }
        job={ customers[4].job }
      />
    </>
  );
}

export default App;
