import facebookLogo from './../../public/icon-facebook.svg';
import twitterLogo from '../../public/icon-twitter.svg';
import instagramLogo from '../../public/icon-instagram.svg';
import youtubeLogo from '../../public/icon-youtube.svg';
function Followers(){
    const followersData = [
        {
          platform: "Facebook",
          username: "@nathanf",
          metric: "Followers",
          value: 1987,
          change: "+12 Today"
        },
        {
          platform: "Twitter",
          username: "@nathanf",
          metric: "Followers",
          value: 1044,
          change: "+99 Today"
        },
        {
          platform: "Instagram",
          username: "@realnathanf",
          metric: "Followers",
          value: 11000,
          change: "+1099 Today"
        },
        {
          platform: "YouTube",
          username: "Nathan F.",
          metric: "Subscribers",
          value: 8239,
          change: "-144 Today"
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
        <div className='media'>
          <h1 className="madiah">Social Media Dashboard</h1>
          <p>Total Followers: 23,004</p> 
          <div className='Followerscard'>
            {followersData.map((item) => (
              <div key={item.platform} data-platform={item.platform}>
                <div className='back'>
                  <div className="logo-username-container">
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
                    <span className="username">{item.username}</span>
                  </div>
                  <div className="metrics">
                    <p className="value">{item.value}</p>
                    <p className="label">{item.metric}</p>
                    <p className="change" style={{ color: getChangeColor(item.change) }}>{item.change}</p>
                  </div>
                </div>  
              </div>      
            ))}
          </div>
        </div>
      );
}

export default Followers;