import './Styles/TopFrame.scss'
import {StarsContainer} from '../Elements/StarsContainer'
import {Intro, Pitch} from '../../defs'

type Props = {}

export const TopFrame = (props: Props) => {
	return (
		<div className='top-frame'>
			<span className='top-left-frame'>
				<h1>{Intro}</h1>
				<p>{Pitch}</p>
			</span>
			<span className='top-right-frame'>
				<StarsContainer />
			</span>
		</div>
	)
}
