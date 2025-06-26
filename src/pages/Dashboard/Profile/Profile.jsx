import { FiMail, FiPhone, FiMapPin, FiUser, FiEdit } from "react-icons/fi";

const Profile = ({ user }) => {
  console.log(user);
  //   const user = {
  //     name: "Tahmid Alam",
  //     email: "tahmid@example.com",
  //     phone: "+880 1234-567890",
  //     location: "Rangpur, Bangladesh",
  //     avatar: "https://i.pravatar.cc/150?img=12", // replace with your user's avatar
  //     joined: "January 2024",
  //     role: "Group Organizer",
  //   };
  return (
    <div className="relative max-w-md mx-auto bg-white dark:bg-gray-900 rounded shadow-md overflow-hidden p-6 dark:shadow dark:shadow-slate-500">
      {/* Edit Button */}
      <button
        className="absolute top-4 right-4 flex items-center gap-1 text-sm text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
        title="Edit Profile"
      >
        <FiEdit />
        Edit
      </button>

      {/* Profile Info */}
      <div className="flex items-center gap-4">
        <img
          src={user.photoURL}
          alt="User Avatar"
          className="w-20 h-20 rounded-full border-4 border-blue-400"
        />
        <div>
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
            {user.displayName}
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-300">
            {user.role}
          </p>
          <p className="text-xs text-gray-400">Joined: January 2024</p>
        </div>
      </div>

      <div className="mt-6 space-y-3 text-gray-700 dark:text-gray-300">
        <div className="flex items-center gap-2">
          <FiMail className="text-blue-500" />
          <span>{user.email}</span>
        </div>
        <div className="flex items-center gap-2">
          <FiPhone className="text-green-500" />
          <span>013xxxxxxxx</span>
        </div>
        <div className="flex items-center gap-2">
          <FiMapPin className="text-red-500" />
          <span>Dhaka, Bangladesh</span>
        </div>
      </div>
    </div>
  );
};

export default Profile;
