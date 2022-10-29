export const Intro:string = "10,000+ of our users love our products."

export const Pitch:string = "We only provide great products combined with excellent customer service. See what our satisfied customers are saying about our services."

export type RatingsComponent = {
	stars:number
	statement:string
}

export type CardData = {
	id:number
	custName:string
	title:string
	statement:string
}

export const Cards:CardData[] = [
	{
		id:0,
		custName:"Colton Smith",
		title:"Verified Buyer",
		statement:"\"We needed the same printed design as the one we had ordered a week prior. Not only did they find the original order, but we also received it in time. Excellent!\"" 
	},
	{
		id:1,
		custName:"Irene Roberts",
		title:"Verified Buyer",
		statement:"\"Customer service is always excellent and very quick turn around. Completely delighted with the simplicity of the purchase and the speed of delivery.\""
	},
	{
		id:2,
		custName:"Anne Wallace",
		title:"Verified Buyer",
		statement:"\"Put an order with this company and can only praise them for the very high standard. Will definitely use them again and recommend them to everyone!\""
	}
]

export const StarRatings:RatingsComponent[] = [
	{
		stars:5,
		statement:"Rated 5 Stars in Reviews"
	},
	{
		stars:5,
		statement:"Rated 5 Stars in Report Guru"
	},
	{
		stars:5,
		statement:"Rated 5 Stars in BestTech"
	}
]