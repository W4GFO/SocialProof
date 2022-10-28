import './Styles/LowerFrame.scss'
import {Card} from '../Elements/Card'

type Props = {}

export const LowerFrame = (props: Props) => {
	return (
		<div className='lower-frame'>
			<span className='card-display card-one'><Card userStatementIndex={0}/></span>
			<span className='card-display card-two'><Card userStatementIndex={1}/></span>
			<span className='card-display card-three'><Card userStatementIndex={2} /></span>
		</div>
	)
}