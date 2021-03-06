import { makeStyles } from '@material-ui/core/styles';

const CartStyles = makeStyles((theme) => ({
  cart: {
    color: 'white',
    cursor: 'pointer',
    fontSize: '1.5rem',
    padding: '0.5rem'
  },
  modal: {
    overflow: 'scroll'
  },
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(4),
    outline: 'none',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column'
  },
  totalPrice: {
    margin: '2rem 0'
  },
  buttons: {
    margin: '1rem 0.5rem'
  }
}));

export default CartStyles;
