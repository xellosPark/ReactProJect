import Customer from "./components/Customer";
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import { styled } from '@mui/system';

// const useStyles = styled('table')({
//   // root: {
//     // width: '100%',
//     // // marginTop: styled.spacing.unit * 3,
//     // overflowX: "auto",
//     // backgroundColor: 'red', 
//   // },
//    //table: {
    
//     // minWidth: 1080
//   }
// });
// const MyrootComponent = styled('root')({
//     width: '100%',
//     marginTop: styled.spacing.unit * 3,
//     overflowX: "auto",
//     backgroundColor: 'red'
// });

const MytableComponent = styled('table')({
  minWidth: 1080
});

export default function App() {
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
      <MytableComponent>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>번호</TableCell>
              <TableCell>이미지</TableCell>
              <TableCell>이름</TableCell>
              <TableCell>생년월일</TableCell>
              <TableCell>성별</TableCell>
              <TableCell>직업</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {customers.map(User => {
              return (
                // map 사용시 키값 정의 필수
                <Customer key={User.id} id={User.id} image={User.image} name={User.name}
                  birthday={User.birthday} gender={User.gender} job={User.job} />);
            })
            }
          </TableBody>
          {/* <Customer
          id={customers[0].id}
          image={customers[0].image}
          name={ customers[0].name }
          birthday={ customers[0].birthday }
          gender={ customers[0].gender }
          job={ customers[0].job }
        /> */}
        </Table>
      </MytableComponent>
    </div>
  );
}


