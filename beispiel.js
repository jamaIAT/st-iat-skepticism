define(['pipAPI', 'https://jamaiat.github.io/st-iat-skepticism/qstiat6.js'], function(APIConstructor, stiatExtension){
	
	var API = new APIConstructor();
		  return stiatExtension({
		  category : { 
		    name : 'Urban Air Mobility', //Will appear in the data.
		    title : {
		      media : {word : 'Urban Air Mobility'}, //Name of the category presented in the task.
		      css : {color:'#31b404','font-size':'2em'}, //Style of the category title.
		      height : 7 //Used to position the "Or" in the combined block.
		    }, 
		    media : [ //Stimuli content as PIP's media objects
    		    	{image : 'UAM1.png', css: {class: 'small-image'}}, 
		            {image : 'UAM2.png', css: {class: 'small-image'}}, 
		            {image : 'UAM3.png', css: {class: 'small-image'}}, 
		            {image : 'UAM4.png', css: {class: 'small-image'}}, 
		            {image : 'UAM5.png', css: {class: 'small-image'}}, 
		            {image : 'UAM6.png', css: {class: 'small-image'}}
		    ], 
		    //Stimulus css (style)
		    css : {color:'#31b404','font-size':'3em'}
		  },	

  		attribute1 : 
			{
			name : 'Unpleasant', //Attribute label
			title : {
				media : {word : 'Negative'}, //Name of the category presented in the task.
				css : {color:'#31b404','font-size':'2em'}, //Style of the category title.
				height : 7 //Used to position the "Or" in the combined block.
			}, 
			media : [ //Stimuli
				{word: 'Uncertainty'},
				{word: 'Risky'},
				{word: 'Dangerous'},
				{word: 'Distrust'},
				{word: 'Harmful'},
				{word: 'Unsafe'}
			], 
			//Can change color and size of the targets here.
			css : {color:'#31b404','font-size':'3em'}
			},
		attribute2 : 
			{
			name : 'Pleasant', //Attribute label
			title : {
				media : {word : 'Positive'}, //Name of the category presented in the task.
				css : {color:'#31b404','font-size':'2em'}, //Style of the category title.
				height : 7 //Used to position the "Or" in the combined block.
			}, 
			media : [ //Stimuli
				{word: 'Safe'},
				{word: 'Reliable'},
				{word: 'Trustworthy'},
				{word: 'Good'},
				{word: 'Beneficial'},
				{word: 'Favorable'}
			], 
			//Can change color and size of the targets here.
			css : {color:'#31b404','font-size':'3em'}
			},

  base_url : {//Where are your images at?
    image : 'https://jamaiat.github.io/st-iat-skepticism/images/'
  }}
  );
  });
