import './Styles/Card.scss'
import {Cards, CardData} from '../../defs'
import IMG_ANNE from '../../Images/image-anne.jpg'
import IMG_IRENE from '../../Images/image-irene.jpg'
import IMG_COLTON from '../../Images/image-colton.jpg'

type CardProps = {
	userStatementIndex:number
}

export const Card = ({userStatementIndex}: CardProps) => {
	const cardData:CardData = Cards[userStatementIndex]

	console.log(cardData.imgUrl)

	return (
		<>
			<header className='card-header'>
				<div className='user-display'>
					<img src={IMG_ANNE} alt="User" />
					<div className='user-info'>
						<h1>{cardData.custName}</h1>
						<p>{cardData.title}</p>
					</div>
				</div>
			</header>
			<article className='user-statement'>
				<p>{cardData.statement}</p>
			</article>
		</>
	)
}