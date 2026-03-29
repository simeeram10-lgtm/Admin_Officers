import React from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "./ui/card";
import { Users, Shield } from "lucide-react";
import Link from "next/link";

export default function HomeCards() {
  return (
    <div className="flex flex-col md:flex-row gap-8 justify-center items-center min-h-[60vh] w-full">
      {/* Officers Card */}
      <Link href="/system-admin" className="w-full md:w-96">
        <Card className="transition-transform hover:scale-105 hover:shadow-xl cursor-pointer bg-white dark:bg-slate-900 border-teal-200 dark:border-cyan-800">
          <CardHeader className="flex flex-row items-center gap-4">
            <div className="p-3 rounded-lg bg-teal-100 dark:bg-cyan-900/30">
              <Users className="w-8 h-8 text-teal-600 dark:text-cyan-300" />
            </div>
            <div>
              <CardTitle className="text-xl font-bold text-teal-800 dark:text-cyan-200">Officers</CardTitle>
              <CardDescription>Manage and onboard officers in bulk</CardDescription>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 dark:text-gray-300 mt-2">
              Access the officers management page to add, edit, or bulk upload officer accounts.
            </p>
          </CardContent>
        </Card>
      </Link>
      {/* Admin Card */}
      <Link href="/city-admin" className="w-full md:w-96">
        <Card className="transition-transform hover:scale-105 hover:shadow-xl cursor-pointer bg-white dark:bg-slate-900 border-teal-200 dark:border-cyan-800">
          <CardHeader className="flex flex-row items-center gap-4">
            <div className="p-3 rounded-lg bg-cyan-100 dark:bg-teal-900/30">
              <Shield className="w-8 h-8 text-cyan-600 dark:text-teal-300" />
            </div>
            <div>
              <CardTitle className="text-xl font-bold text-cyan-800 dark:text-teal-200">Admins</CardTitle>
              <CardDescription>Manage and onboard city admins</CardDescription>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 dark:text-gray-300 mt-2">
              Access the city admin provisioning page to add, edit, or bulk upload city admin accounts.
            </p>
          </CardContent>
        </Card>
      </Link>
    </div>
  );
}
