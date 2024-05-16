import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function SidebarSection({ title, children, more }) {
  return (
    <section className="w-[350px] bg-[#F8E8EE] mb-4 rounded-2xl">
      <h5 className="py-3 px-4 flex items-center leading-6 font-extrabold text-xl overflow-hidden">
        {title}
      </h5>
      <div className="grid">
        {children}
        {more && (
          <Link to={more} className="h-[52px] flex items-center justify-center px-4 text-[#FF70AB] hover:bg-[#CAE6B2]">
            Daha fazla göster
          </Link>
        )}
      </div>
    </section>
  );
}

SidebarSection.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  more: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
};

SidebarSection.defaultProps = {
  more: false,
};
