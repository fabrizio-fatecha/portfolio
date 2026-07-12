import "../styles/header.css";

export default function Header({ profile }) {
  return (
    <header className="header">
      <div className="container header-inner">
        <h1 className="header-name">{profile.name}</h1>
        <p className="header-title">{profile.title}</p>
        <p className="header-meta">
          <span>{profile.location}</span>
          {profile.availability && (
            <>
              <span className="dot">•</span>
              <span>{profile.availability}</span>
            </>
          )}
        </p>
      </div>
    </header>
  );
}
