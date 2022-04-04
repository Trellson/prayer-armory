import { makeStyles } from '@material-ui/core/Styles'



const useStyles = makeStyles((theme) => ({
    root:{
        minHeight: '100vh',
        backgroundImage: `url('https://media3.giphy.com/media/ED7Mr5Eg83ocbhsPpY/giphy.gif?cid=ecf05e47u07q7yyqce7vf2ozaeq7kzz6dkfo6ww9k4pps3vk&rid=giphy.gif&ct=g')`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
    },
    appBar:{
        background: 'none',
        display: 'flex',
        flexDirection: 'row'
    },
    appBarWrapper:{
        width: '80%',
        margin: '0 auto',
    },
    colorText:{
      color: '#a9a9a9'  
    },
    container:{
        backgroundColor: theme.palette.background.stone,
        padding: theme.spacing(8, 0, 6),
        
    },
    icon: {
        color: '#fff',
        fontSize: '2rem'
    },
    cardMedia: {
        height: '40px',
    },
    title:{
        flexGrow: '1'
    }

}));

export default useStyles;