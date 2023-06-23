import { TouchableOpacity } from 'react-native';
import TextField from './TextField';
import S from '../styles/global.js';

export default function Button({ children, style }) {
    return (
        <TouchableOpacity style={style}>
            <TextField style={S.btnText}>{children}</TextField>
        </TouchableOpacity>
    );
}
