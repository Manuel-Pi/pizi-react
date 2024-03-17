import React from 'react'
import { defaultProps } from '../../../utils/PiziComponent/PiziComponent'
import { Json } from './Json'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Json> =  {
	title: 'Data/Json',
	component: Json,
	argTypes: {
		display: {
		  defaultValue: defaultProps.display
		},
		color: {
		  defaultValue: defaultProps.color
		}
	}
}

export default meta
type Story = StoryObj<typeof Json>

const Template = (args: any) => <>
	<Json {...args}></Json>
</>


export const Default: Story = {
	render: Template,
	args: {
		json: [
			{
			  "_id": "660c48dbdea421278941c5fb",
			  "index": 0,
			  "guid": "50e7e755-0935-4851-886f-617b2bde4e5d",
			  "isActive": true,
			  "balance": "$1,619.86",
			  "picture": "https://localhost:2200/",
			  "age": 38,
			  "eyeColor": "blue",
			  "name": "Stark Murray",
			  "gender": "male",
			  "company": "IMAGEFLOW",
			  "email": "starkmurray@imageflow.com",
			  "phone": "+1 (868) 437-2358",
			  "address": "863 Miller Avenue, Fairforest, Louisiana, 5870",
			  "about": "Exercitation mollit dolor sit id ipsum amet adipisicing aliquip do ullamco cillum nostrud dolor. Sunt nostrud veniam irure tempor exercitation veniam ex. Occaecat reprehenderit eiusmod ut pariatur consequat aute culpa. Excepteur labore adipisicing velit aute sunt dolor ullamco in. Adipisicing duis amet anim dolor culpa cillum ut id anim adipisicing do duis. Consectetur eiusmod quis voluptate sit. Exercitation culpa et aute cupidatat esse nostrud id fugiat amet Lorem aliqua.\r\n",
			  "registered": "2016-02-01T07:50:52 +05:00",
			  "latitude": 2.440611,
			  "longitude": 50.539044,
			  "tags": [
				"consequat",
				"fugiat",
				"occaecat",
				"amet",
				"fugiat",
				"id",
				"deserunt"
			  ],
			  "friends": [
				{
				  "id": 0,
				  "name": "Andrea Greer"
				},
				{
				  "id": 1,
				  "name": "Tami Woodard"
				},
				{
				  "id": 2,
				  "name": "Lawrence Patrick"
				}
			  ],
			  "greeting": "Hello, Stark Murray! You have 9 unread messages.",
			  "favoriteFruit": "strawberry"
			},
			{
			  "_id": "660c48db053cbec12235a313",
			  "index": 1,
			  "guid": "9e054303-963f-47d4-a023-b4ca6ef84784",
			  "isActive": true,
			  "balance": "$1,871.02",
			  "picture": "http://placehold.it/32x32",
			  "age": 39,
			  "eyeColor": "brown",
			  "name": "Valentine Irwin",
			  "gender": "male",
			  "company": "MALATHION",
			  "email": "valentineirwin@malathion.com",
			  "phone": "+1 (805) 500-3521",
			  "address": "238 Arlington Place, Lindcove, Kentucky, 4485",
			  "about": "Ipsum dolore et sunt esse do. Officia aute id consectetur cillum dolor magna reprehenderit. Adipisicing adipisicing pariatur ipsum anim exercitation officia. Labore adipisicing aute dolore ipsum ipsum amet reprehenderit exercitation consectetur aute consequat. Pariatur eu et laborum fugiat cillum minim. Quis esse occaecat laborum voluptate veniam mollit incididunt sunt. Laboris officia do Lorem id tempor ullamco qui duis Lorem.\r\n",
			  "registered": "2015-03-15T06:44:36 +04:00",
			  "latitude": 25.705736,
			  "longitude": -64.311952,
			  "tags": [
				"consequat",
				"excepteur",
				"in",
				"aute",
				"excepteur",
				"minim",
				"fugiat"
			  ],
			  "friends": [
				{
				  "id": 0,
				  "name": "Michelle Perez"
				},
				{
				  "id": 1,
				  "name": "Valencia Jenkins"
				},
				{
				  "id": 2,
				  "name": "Meadows Lynch"
				}
			  ],
			  "greeting": "Hello, Valentine Irwin! You have 10 unread messages.",
			  "favoriteFruit": "strawberry"
			},
			{
			  "_id": "660c48db06bfce240630a0f6",
			  "index": 2,
			  "guid": "0b4214bd-44fc-49f0-b565-7ee8ea7432d3",
			  "isActive": false,
			  "balance": "$2,761.92",
			  "picture": "http://placehold.it/32x32",
			  "age": 25,
			  "eyeColor": "blue",
			  "name": "Malone Harrell",
			  "gender": "male",
			  "company": "MUSIX",
			  "email": "maloneharrell@musix.com",
			  "phone": "+1 (964) 459-2843",
			  "address": "712 Oxford Walk, Kieler, California, 8201",
			  "about": "Eu commodo culpa reprehenderit culpa labore pariatur tempor aliquip non dolor consequat velit veniam. Aliqua quis quis aliqua occaecat irure adipisicing excepteur cillum cillum ad esse exercitation quis est. Laborum labore eu aliqua consequat tempor pariatur. Anim velit eu duis proident ut ex id. Id ad ipsum minim tempor ipsum mollit quis dolore incididunt. Dolor mollit minim eiusmod ipsum veniam sit. Tempor consequat officia aliquip cupidatat aliquip laborum adipisicing culpa.\r\n",
			  "registered": "2014-07-13T08:29:01 +04:00",
			  "latitude": -48.567916,
			  "longitude": 20.026991,
			  "tags": [
				"nostrud",
				"deserunt",
				"laboris",
				"aute",
				"laborum",
				"cillum",
				"deserunt"
			  ],
			  "friends": [
				{
				  "id": 0,
				  "name": "Garrison Cruz"
				},
				{
				  "id": 1,
				  "name": "Elnora Terrell"
				},
				{
				  "id": 2,
				  "name": "Lila Battle"
				}
			  ],
			  "greeting": "Hello, Malone Harrell! You have 2 unread messages.",
			  "favoriteFruit": "apple"
			},
			{
			  "_id": "660c48dbbe56dbc3b6a3fdac",
			  "index": 3,
			  "guid": "1338e08b-67a3-4dd8-98a8-953f9d60b410",
			  "isActive": false,
			  "balance": "$2,375.11",
			  "picture": "http://placehold.it/32x32",
			  "age": 26,
			  "eyeColor": "brown",
			  "name": "Bernice Beard",
			  "gender": "female",
			  "company": "BYTREX",
			  "email": "bernicebeard@bytrex.com",
			  "phone": "+1 (922) 508-2847",
			  "address": "523 Nassau Avenue, Ogema, Northern Mariana Islands, 7491",
			  "about": "Nulla nostrud labore cupidatat dolore ad voluptate exercitation tempor do aute consectetur ea. Commodo ullamco aliquip amet excepteur exercitation. Culpa elit deserunt quis ex incididunt exercitation officia irure pariatur esse et ex quis. Exercitation veniam ut consectetur eiusmod laborum aute quis non aliquip sint consequat. Sint ea fugiat dolore excepteur aliquip deserunt. Ullamco occaecat ea tempor id deserunt tempor consequat incididunt. Velit tempor fugiat mollit non minim fugiat dolore.\r\n",
			  "registered": "2019-02-18T05:37:32 +05:00",
			  "latitude": -86.907506,
			  "longitude": -177.401026,
			  "tags": [
				"labore",
				"ea",
				"non",
				"magna",
				"et",
				"adipisicing",
				"dolor"
			  ],
			  "friends": [
				{
				  "id": 0,
				  "name": "Orr Flores"
				},
				{
				  "id": 1,
				  "name": "Peterson Mcpherson"
				},
				{
				  "id": 2,
				  "name": "Cantrell Ayala"
				}
			  ],
			  "greeting": "Hello, Bernice Beard! You have 1 unread messages.",
			  "favoriteFruit": "banana"
			},
			{
			  "_id": "660c48dbb3d7160c0bb468b3",
			  "index": 4,
			  "guid": "fc164af6-1de3-4a20-9ae4-1e4cd271ff82",
			  "isActive": true,
			  "balance": "$1,534.84",
			  "picture": "http://placehold.it/32x32",
			  "age": 35,
			  "eyeColor": "green",
			  "name": "Shauna Vinson",
			  "gender": "female",
			  "company": "TOURMANIA",
			  "email": "shaunavinson@tourmania.com",
			  "phone": "+1 (946) 503-2391",
			  "address": "886 Rutherford Place, Hebron, Georgia, 251",
			  "about": "Do dolore pariatur enim fugiat. Consequat ad officia pariatur adipisicing aliqua. Nostrud elit sunt magna aute ex consectetur qui Lorem in deserunt esse ad ut ut. Magna duis qui ea esse dolore ut do nisi nostrud laborum qui. Excepteur laborum voluptate aliqua non cupidatat commodo. Sint et velit reprehenderit consectetur cupidatat elit reprehenderit aliquip. Cupidatat reprehenderit deserunt irure eiusmod officia anim eu deserunt et eiusmod ad ut.\r\n",
			  "registered": "2020-03-18T09:06:28 +04:00",
			  "latitude": 67.738213,
			  "longitude": 113.797188,
			  "tags": [
				"exercitation",
				"ullamco",
				"non",
				"adipisicing",
				"sit",
				"do",
				"sint"
			  ],
			  "friends": [
				{
				  "id": 0,
				  "name": "Carla Reynolds"
				},
				{
				  "id": 1,
				  "name": "Kent Lamb"
				},
				{
				  "id": 2,
				  "name": "Lacey Barry"
				}
			  ],
			  "greeting": "Hello, Shauna Vinson! You have 10 unread messages.",
			  "favoriteFruit": "strawberry"
			},
			{
			  "_id": "660c48db8adeb76b96bbdda5",
			  "index": 5,
			  "guid": "8369ba3f-6a53-4281-8fee-0291be3ed54c",
			  "isActive": true,
			  "balance": "$2,734.28",
			  "picture": "http://placehold.it/32x32",
			  "age": 25,
			  "eyeColor": "green",
			  "name": "Norman Craft",
			  "gender": "male",
			  "company": "DIGIRANG",
			  "email": "normancraft@digirang.com",
			  "phone": "+1 (845) 526-3810",
			  "address": "456 Conover Street, Baker, Alaska, 2648",
			  "about": "Eu in ex ullamco exercitation ea occaecat esse et labore nulla incididunt quis amet cupidatat. Irure anim laboris est commodo qui et duis reprehenderit anim qui consequat ullamco minim velit. Occaecat elit velit aliqua officia non exercitation veniam. Cupidatat dolore magna ullamco sit in. Fugiat esse ipsum sint esse dolore deserunt non ullamco nostrud officia dolore pariatur occaecat in.\r\n",
			  "registered": "2023-05-09T09:13:31 +04:00",
			  "latitude": -45.654367,
			  "longitude": -66.849339,
			  "tags": [
				"deserunt",
				"labore",
				"et",
				"id",
				"officia",
				"do",
				"incididunt"
			  ],
			  "friends": [
				{
				  "id": 0,
				  "name": "Erickson Mckay"
				},
				{
				  "id": 1,
				  "name": "Edwina Duke"
				},
				{
				  "id": 2,
				  "name": "Montgomery Buchanan"
				}
			  ],
			  "greeting": "Hello, Norman Craft! You have 6 unread messages.",
			  "favoriteFruit": "apple"
			},
			{
			  "_id": "660c48db9bb6b89eecfb8902",
			  "index": 6,
			  "guid": "a48a8884-348f-426b-ba8a-0683d27bb89b",
			  "isActive": false,
			  "balance": "$1,840.04",
			  "picture": "http://placehold.it/32x32",
			  "age": 32,
			  "eyeColor": "blue",
			  "name": "Susanne Byers",
			  "gender": "female",
			  "company": "GEEKWAGON",
			  "email": "susannebyers@geekwagon.com",
			  "phone": "+1 (871) 591-3905",
			  "address": "761 Bancroft Place, Dorneyville, Rhode Island, 9939",
			  "about": "Aute incididunt culpa esse tempor aliqua ut tempor commodo dolore ullamco. Commodo minim ad et aute. Duis excepteur non laborum dolor in deserunt culpa deserunt ea veniam nisi. Minim do esse aute tempor et irure ipsum amet ea excepteur. Tempor eu veniam aliqua sit dolore proident amet. Lorem dolor ea laborum officia magna qui aliquip. Esse laboris minim id aliquip minim.\r\n",
			  "registered": "2023-02-25T08:05:05 +05:00",
			  "latitude": 7.070985,
			  "longitude": -118.878025,
			  "tags": [
				"pariatur",
				"aute",
				"ea",
				"nulla",
				"qui",
				"irure",
				"non"
			  ],
			  "friends": [
				{
				  "id": 0,
				  "name": "Roberson Reid"
				},
				{
				  "id": 1,
				  "name": "Nellie Cash"
				},
				{
				  "id": 2,
				  "name": "Henson Garza"
				}
			  ],
			  "greeting": "Hello, Susanne Byers! You have 10 unread messages.",
			  "favoriteFruit": "banana"
			}
		  ]
	}
}