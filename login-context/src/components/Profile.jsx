import { useUser } from "../context/userContext";

const Profile = () => {
  const { user } = useUser();

  if (!user) return <div>Please Login</div>;
  return <div>WelCome {user.username}</div>;
};

export default Profile;
