import '../../../index.css';
import { createBoard } from '@wixc3/react-board';
import { Label } from '../../../components/label/label';
import Label_module from '../../../components/label/label.module.scss';
import Classnames from 'classnames';

export default createBoard({
    name: 'Label',
    Board: () => <Label className={Classnames('label', Label_module.root)}>My label</Label>,
    isSnippet: true,
});
