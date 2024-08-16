import facebookLogo from './../../public/icon-facebook.svg';
import twitterLogo from '../../public/icon-twitter.svg';
import instagramLogo from '../../public/icon-instagram.svg';
import youtubeLogo from '../../public/icon-youtube.svg';
function Engagements(){
  const engagementData = [
    {
      platform: "Facebook",
      metric: "Page Views",
      value: 87,
      change: "+3%"
    },
    {
      platform: "Facebook",
      metric: "Likes",
      value: 52,
      change: "-2%"
    },
    {
      platform: "Instagram",
      metric: "Likes",
      value: 5462,
      change: "+2257%"
    },
    {
      platform: "Instagram",
      metric: "Profile Views",
      value: 52000,
      change: "+1375%"
    },
    {
      platform: "Twitter",
      metric: "Retweets",
      value: 117,
      change: "+303%"
    },
    {
      platform: "Twitter",
      metric: "Likes",
      value: 507,
      change: "+553%"
    },
    {
      platform: "YouTube",
      metric: "Likes",
      value: 107,
      change: "-19%"
    },
    {
      platform: "YouTube",
      metric: "Total Views",
      value: 1407,
      change: "-12%"
    }
  ];

  const getChangeColor = (change) => {
    if (change.startsWith('-')) {
      return 'red'; 
    } else if (change.startsWith('+')) {
      return 'green'; 
    }
    return 'black'; 
  };

  return (
    <div className='Today'>
      <h1 className="Todayh">Overview-Today</h1>
      <div className='engagementcard'>
        {engagementData.map((item) => (
          <div key={item.platform} data-platform={item.platform}>
            <img
              src={
                item.platform.toLowerCase() === "facebook" ? facebookLogo :
                item.platform.toLowerCase() === "twitter" ? twitterLogo :
                item.platform.toLowerCase() === "instagram" ? instagramLogo :
                item.platform.toLowerCase() === "youtube" ? youtubeLogo : ""
              }
              alt={`${item.platform} logo`}
              className="platform-logo"
            />
            <h1 className='action'>{item.metric}</h1>
            <h1 className='number'>{item.value}</h1>
            <p className="change" style={{ color: getChangeColor(item.change) }}>{item.change}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Engagements;