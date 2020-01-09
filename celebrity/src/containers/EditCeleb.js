import { connect } from 'react-redux';
import { editCeleb } from '../actions/actions';
import AdminIndiv from '../components/AdminIndiv';

const mapDispatchToProps = dispatch => {
    return {
        onEditCeleb: celeb => {
            dispatch(editCeleb(celeb))
        }
    }
}

export default connect (
    null,
    mapDispatchToProps
)(AdminIndiv)