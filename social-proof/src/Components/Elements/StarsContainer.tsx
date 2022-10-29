import './Styles/StarsContainer.scss'
import {RatingsContainer} from './RatingsContainer'

type Props = {}

export const StarsContainer = (props: Props) => {
	return (
		<>
			<div className='star-ratings-container'>
				<RatingsContainer className='rating-container ratings-top' ratingsIndex={0} />
				<RatingsContainer className='rating-container ratings-middle' ratingsIndex={1} />
				<RatingsContainer className='rating-container ratings-bottom' ratingsIndex={2} />
			</div>
		</>
	)
}