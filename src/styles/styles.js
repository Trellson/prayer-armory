import { makeStyles } from '@material-ui/core/Styles'


const useStyles = makeStyles((theme) => ({
    container:{
        backgroundColor: theme.palette.background.stone,
        padding: theme.spacing(8, 0, 6),
        
    },
    icon: {
        marginRight: '20px',
    },
    cardMedia: {
        height: '40px',

    }
}));

export default useStyles;