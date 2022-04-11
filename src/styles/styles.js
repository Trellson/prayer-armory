import { makeStyles } from '@material-ui/core/Styles'




const useStyles = makeStyles((theme) => ({
    root:{
       
        background: 'rgba(0,0,0,0.5)',
        
    },
    cardBack:{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        
    },
    cardTitle:{
        fontWeight: 'bold',
        fontSize: '2rem',
        color: '#a9a9a9',
    },
    cardDesc:{
        color: '#fff',
        fontSize: "1.1rem",
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
    colorTextMain:{
        color: '#fff'
    },
    container:{
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: theme.palette.background.stone,
        padding: theme.spacing(8, 0, 6),
        
    },
    icon: {
        color: '#fff',
        fontSize: '2rem'
    },
    card: {
        width: '38rem',
        background: 'rgba(0,0,0,0.5)',
        margin: '20px',
    },
    cardGrid:{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    cardContent: {
        display: 'flex',
        justifyContent:'center',
        alignItems:'center',
    },
    chooseCard: {
        
        background: 'rgba(0,0,0,0.5)',
        margin: '20px',
    },
    cardMedia: {
        height: '2.5rem',
    },
    media: {
        height: '100%',
        
    },
    searchBar:{
        display: 'flex',
        justifyContent: 'center',
        
    },
    title:{
        flexGrow: '1',
    },
    footer:{
        backgroundColor: 'rgba(0,0,0,0.7)',
        padding: '50px 5px',
        color: '#a9a9a9',
    },



}));

export default useStyles;