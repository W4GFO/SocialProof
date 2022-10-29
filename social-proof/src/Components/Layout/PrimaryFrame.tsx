import './Styles/PrimaryFrame.scss'
import {LowerFrame} from './LowerFrame'
import {TopFrame} from './TopFrame'

type Props = {}

export const PrimaryFrame = (props: Props) => {
	return (
		<div className='primary-frame'>
			<TopFrame />
			<LowerFrame />
		</div>
	)
}