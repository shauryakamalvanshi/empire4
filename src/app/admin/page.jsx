"use client"
import React, { useEffect, useState } from 'react';
import styles from "@/styles/admin.module.css";
import { useRouter } from 'next/navigation';
import axios from 'axios';
import toast, { Toaster } from "react-hot-toast";
import Deleteicon from '@/components/Deleteicon';


const getData = async () => {
  try {
    const res = await fetch(`/api/users/getdata/`, {
      cache: 'no-store',
    });
    if (!res.ok) {
      throw new Error('Failed to fetch topics');
    }
    return res.json();
  } catch (error) {
    console.log('Error Loading Data', error);
    return { topics: [] }; // Return empty array for 'topics'
  }
};



const Page = () => {
  const router = useRouter();
  const [topics, setTopics] = useState([]);
  const [serialNumbers, setSerialNumbers] = useState([]);

  const logout = async () => {

    try {
      await axios.get('api/users/logout');
      toast.success('logout successfully');
      router.push('/');
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const fetchTopics = async () => {
      const data = await getData();
      setTopics(data.topics.reverse()); // Reverse the array
    };

    fetchTopics();
  }, []);

  useEffect(() => {
    setSerialNumbers(
      topics.map((_, index) => index + 1)
    );
  }, [topics]);
  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/gh/Loopple/loopple-public-assets@main/riva-dashboard-tailwind/riva-dashboard.css"
      />

      <button onClick={logout} className="flex ml-auto mr-auto text-2xl bg-blue-500 p-3 rounded-lg">
        Log out
      </button>
      <div>
        <table className={styles.table}>
        <thead className={styles.thead}>
          <tr>
            <th className={styles.th}>Serial No</th>
            <th className={styles.th}>Username</th>
            <th className={styles.th}>Email</th>
            <th className={styles.th}>Phone</th>
            <th className={styles.th}>Message</th>
            <th className={styles.th}>delete
            </th>
          </tr>
        </thead>
        <tbody>
          {topics.map((t, index) => (
            <tr key={t._id}>
              <td className={styles.td}>{serialNumbers[index]}</td>
              <td className={styles.td}>{t.fname} {t.lname}</td>
              <td className={styles.td}>{t.email}</td>
              <td className={styles.td}>{t.phone}</td>
              <td className={styles.td}>{t.message}</td>
              <td className={styles.td}><Deleteicon id={t._id}/></td>
            </tr>
          ))}
        </tbody>
        </table>
      </div>
      <Toaster></Toaster>

    </>
  );
};

export default Page;
