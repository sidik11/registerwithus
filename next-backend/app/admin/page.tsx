"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";

interface User {
  id: number;
  user_name: string;
  user_phone: string;
  user_email: string;
  message: string;
  created_at: string;
}

export default function AdminPage() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await axios.get("/api/admin");
        setUsers(res.data);
      } catch (err) {
        console.error("Error fetching users:", err);
      }
    };
    fetchUsers();
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>User Submissions</h1>
      <table
        style={{
          width: "100%",
          marginTop: "20px",
          borderCollapse: "collapse",
          border: "1px solid #ccc",
        }}
      >
        <thead>
          <tr>
            <th style={{ border: "1px solid #ccc", padding: "8px" }}>ID</th>
            <th style={{ border: "1px solid #ccc", padding: "8px" }}>Name</th>
            <th style={{ border: "1px solid #ccc", padding: "8px" }}>Phone</th>
            <th style={{ border: "1px solid #ccc", padding: "8px" }}>Email</th>
            <th style={{ border: "1px solid #ccc", padding: "8px" }}>
              Message
            </th>
            <th style={{ border: "1px solid #ccc", padding: "8px" }}>
              Created At
            </th>
          </tr>
        </thead>
        <tbody>
          {users.map((u) => (
            <tr key={u.id}>
              <td style={{ border: "1px solid #ccc", padding: "8px" }}>
                {u.id}
              </td>
              <td style={{ border: "1px solid #ccc", padding: "8px" }}>
                {u.user_name}
              </td>
              <td style={{ border: "1px solid #ccc", padding: "8px" }}>
                {u.user_phone}
              </td>
              <td style={{ border: "1px solid #ccc", padding: "8px" }}>
                {u.user_email}
              </td>
              <td style={{ border: "1px solid #ccc", padding: "8px" }}>
                {u.message}
              </td>
              <td style={{ border: "1px solid #ccc", padding: "8px" }}>
                {u.created_at}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
