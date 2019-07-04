import { makeStyles } from '@material-ui/core/styles';

const CartStyles = makeStyles((theme) => ({
  cart: {
    color: 'white',
    cursor: 'pointer',
    fontSize: '1.5rem',
    padding: '0.5rem'
  },
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(4),
    outline: 'none'
  }
}));

export default CartStyles;