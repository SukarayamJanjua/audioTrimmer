import Link from 'next/link';
import React from 'react';

const NavBar = () => {
    return (
        <nav className="bar">
            <div className="tools">
                <Link href="/" legacyBehavior>
                    <a className="router-link-active">

                        <svg aria-hidden="true" width="2.5em" height="1.7em" fill="currentColor" stroke="">
                            <use xlinkHref="#icon-menu-remover"></use>
                        </svg>
                        Remover
                    </a>
                </Link>
                <Link href="/splitter-ai" legacyBehavior>
                    <a>
                        <svg aria-hidden="true" width="2.5em" height="1.7em" fill="currentColor" stroke="">
                            <use xlinkHref="#icon-menu-splitter"></use>
                        </svg>
                        Splitter
                    </a>
                </Link>
                <Link href="/pitch" legacyBehavior>
                    <a>
                        <svg aria-hidden="true" width="2.5em" height="1.7em" fill="currentColor" stroke="">
                            <use xlinkHref="#icon-menu-pitch"></use>
                        </svg>
                        Pitcher
                    </a>
                </Link>
                <Link href="/key-bpm-finder" legacyBehavior>
                    <a>
                        <svg aria-hidden="true" width="2.5em" height="1.7em" fill="currentColor" stroke="">
                            <use xlinkHref="#icon-menu-bpm"></use>
                        </svg>
                        Key BPM Finder
                    </a>
                </Link>
                <Link href="/cutter" legacyBehavior>
                    <a className="router-link-active router-link-exact-active" aria-current="page">
                        <svg aria-hidden="true" width="2.5em" height="1.7em" fill="currentColor" stroke="">
                            <use xlinkHref="#icon-menu-cutter"></use>
                        </svg>
                        Cutter
                    </a>
                </Link>
                <Link href="/joiner" legacyBehavior>
                    <a>
                        <svg aria-hidden="true" width="2.5em" height="1.7em" fill="currentColor" stroke="">
                            <use xlinkHref="#icon-menu-joiner"></use>
                        </svg>
                        Joiner
                    </a>
                </Link>
                <Link href="/voice-recorder" legacyBehavior>
                    <a>
                        <svg aria-hidden="true" width="2.5em" height="1.7em" fill="currentColor" stroke="">
                            <use xlinkHref="#icon-menu-recorder"></use>
                        </svg>
                        Recorder
                    </a>
                </Link>
                <Link href="/karaoke" legacyBehavior>
                    <a>
                        <svg aria-hidden="true" width="2.5em" height="1.7em" fill="currentColor" stroke="">
                            <use xlinkHref="#icon-menu-karaoke"></use>
                        </svg>
                        Karaoke
                    </a>
                </Link>
            </div>
            <div className="help">
                <Link href="/support" legacyBehavior>
                    <a>
                        <svg aria-hidden="true" width="1.75em" height="1.75em" fill="currentColor" stroke="currentColor">
                            <use xlinkHref="#icon-menu-help"></use>
                        </svg>
                        <div className="t">Support</div>
                    </a>
                </Link>
                <button className="link">
                    <svg aria-hidden="true" width="2em" height="2em" fill="currentColor" stroke="">
                        <use xlinkHref="#icon-flag-en_GB"></use>
                    </svg>
                    <div className='f'>Flag</div>
                </button>
            </div>
        </nav>
    );
};

export default NavBar;
