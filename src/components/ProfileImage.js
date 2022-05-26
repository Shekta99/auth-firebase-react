import { useUser } from "../providers/UserProvider";

export const ProfileImage = () => {
  const { user } = useUser();
  return <img src={user.profileImage} alt="user" />;
};
