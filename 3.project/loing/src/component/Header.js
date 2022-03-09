import { useState } from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Grid from '@mui/material/Grid';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';


export default function Header() {

    function Nav() {
        return (
            // <nav style={{ border: `1px solid gray` }}>
            <nav>
                <ol>
                    <li>html</li>
                    <li>css</li>
                </ol>
            </nav>
        );
    }

    function Article(){
        const [open, setOpen] = useState(false);
        return (
            // <article style={{ border: `1px solid gray` }}>
            <article >
                <h2>Welcome</h2>
                Hello web!
                YouTube의 크리에이티브 커먼즈
                모든 크리에이터는 업로드한 동영상에 크리에이티브 커먼즈 라이선스를 표시할 수 있습니다.
                업로드한 모든 동영상에 표준 YouTube 라이선스가 기본 설정으로 유지됩니다. 표준 YouTube 라이선스 약관을 검토하려면 YouTube 서비스 약관을 참조하세요.
                크리에이티브 커먼즈 라이선스는 100% 직접 창작한 콘텐츠에만 사용할 수 있습니다. 동영상에 Content ID 소유권 주장이 제기되면 동영상에 크리에이티브 커먼즈 라이선스를 표시할 수 없습니다.
                원본 동영상에 크리에이티브 커먼즈 라이선스를 표시하면 전체 YouTube 커뮤니티에 동영상의 재사용 및 수정 권한을 부여하게 됩니다.
                <br />
                {/* <ButtonGroup variant="contained" aria-label="outlined primary button group"> */}
                <br />
                <ButtonGroup>
                    <Button variant='outlined' onClick={() => {
                        setOpen(true);
                        }}
                    >
                        Create
                    </Button>
                    <Button variant='outlined'>Update</Button>
                </ButtonGroup>
                <Button variant='outlined'>Delete</Button>
                <Dialog open={open}>
                    <DialogTitle>Create</DialogTitle>
                    <DialogContent>
                        < DialogContentText>
                            HelloCreate!!
                        </DialogContentText>
                        <DialogActions>
                            <Button variant='outlined'>CREATE</Button>
                            <Button variant='outlined' onClick={() => {
                            setOpen(false);
                            }}
                            >
                                CANCEL
                            </Button>
                        </DialogActions>
                    </DialogContent>
                </Dialog>
            </article>
        );
    }

    return( 
        <div className="header">
            <h1>
                welcome
            </h1>
            <Grid container>
                <Grid item xs="2">
                    <Nav />
                </Grid>
                <Grid item xs="10">
                    <Article />
                </Grid>
            </Grid>
        </div>   
        );
    }