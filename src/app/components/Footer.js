'use client'
import React from 'react';
import { Tooltip } from 'antd';
import { FaPhoneAlt, FaLinkedin, FaInstagram, FaGithub, FaWhatsapp } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import './style.css'
import Link from 'next/link';
function Footer() {
  return (
    <footer className="footer">

      <div style={{ display: 'flex', justifyContent: 'space-evenly', width: "100%", alignItems: 'center', height: '100px' }}>
        <div>Elevating the Digital Experience!</div>
          <Tooltip title="Phone : 9380336852">
            <FaPhoneAlt size={24} />
          </Tooltip>

          <Tooltip title="Email : shifayathkhan96@gmail.com">
            <MdEmail size={24} />
          </Tooltip>

      <Link href="https://www.linkedin.com/in/shifayath-khan-49b1111a1">
          <Tooltip title="LinkedIn">
            <FaLinkedin size={24} />
          </Tooltip>
      </Link>

      <Link href="https://www.instagram.com/_d_honey_boy_/">
          <Tooltip title="Instagram">
            <FaInstagram size={24} />
          </Tooltip>
      </Link>

      <Link href="https://wa.me/9380336852">
          <Tooltip title="WhatsApp">
            <FaWhatsapp size={24} />
          </Tooltip>
      </Link>

      <Link href="https://github.com/Shifayath">
          <Tooltip title="GitHub">
            <FaGithub size={24} />
          </Tooltip>
      </Link>
      </div>
    </footer>
  );
}

export default Footer;
