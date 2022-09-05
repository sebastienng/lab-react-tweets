import ProfileImage from "./ProfileImage";
import User from "./User";
import Actions from "./Actions";
import Timestamp from "./Timestamp";
import Message from "./Message";

function Tweet(props) {
  const tweet = props.tweet;
  const user = tweet.user;

  return (
    <div className="tweet">
      <ProfileImage src={user.image} />
      <div className="body">
        <div className="top">
          <User name={user.name} handle={user.handle} />
          <Timestamp timestamp={tweet.timestamp} />
        </div>

        <Message message={tweet.message} />
        <Actions />
      </div>

      <i class="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
