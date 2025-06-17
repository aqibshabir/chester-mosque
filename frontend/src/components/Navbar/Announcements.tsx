'use client';
import { usePathname } from 'next/navigation';

interface AnnouncementsProps {
  home: { announcement: string; announcementStart: string; announcementEnd: string }[];
}

function Announcements({ home }: AnnouncementsProps) {
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  const now = new Date();
  const showAnnouncement =
    home[0].announcement &&
    (!home[0].announcementStart || new Date(home[0].announcementStart) <= now) &&
    (!home[0].announcementEnd || new Date(home[0].announcementEnd) >= now);
  return (
    <>
      {isHomePage && showAnnouncement ? (
        <div className="bg-gradient-to-br from-indigo-600 to-indigo-500 text-white flex justify-center items-center z-50">
          <p className="font-semibold uppercase z-50 py-1">{home[0].announcement}</p>
        </div>
      ) : null}
    </>
  );
}

export default Announcements;
