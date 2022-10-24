import "./header.css";
import UserAvatarImage from '../../assets/images/user-avatar.png';

export const Header = () => {
  return (
    <header>
      <div class="dropdown float-left">
        <div class="menu-button profile" aria-haspopup="true" aria-expanded="true">
          <img src={UserAvatarImage} alt="UserAvatarImage" width="25" class="user-avatar" />
        </div>

        <ul class="dropdown-menu">
          <li>Logout</li>
        </ul>
      </div>      
      <h1 class="float-left">Weather Safe</h1>
    </header>
  );
}
