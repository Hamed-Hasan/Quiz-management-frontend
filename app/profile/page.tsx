"use client"
import { useGetProfileQuery, useUpdateProfileMutation } from '@/redux/api/profileApi';
import { getUserInfo } from '@/services/auth.service';
import React, { useEffect, useState } from 'react';

const ProfilePage = () => {
  const userId = getUserInfo();
  console.log(userId)
  const { data: userProfile, isLoading, isError, error, refetch } = useGetProfileQuery(userId);
  
  const [updateProfile] = useUpdateProfileMutation();
  const [formData, setFormData] = useState({
    username: '',
    firstName: '',
    lastName: '',
    phoneNumber: '',
    address: '',
    bio: '',
    profileImage: '',
  });

  useEffect(() => {
    if (userProfile) {
      setFormData({
        username: userProfile.username,
        firstName: userProfile.firstName,
        lastName: userProfile.lastName,
        phoneNumber: userProfile.phoneNumber,
        address: userProfile.address,
        bio: userProfile.bio,
        profileImage: userProfile.profileImage,
      });
    }
  }, [userProfile]);

  const handleUpdateProfile = async () => {
    try {
      const updatedProfileData = {
        username: formData.username,
        firstName: formData.firstName,
        lastName: formData.lastName,
        phoneNumber: formData.phoneNumber,
        address: formData.address,
        bio: formData.bio,
        profileImage: formData.profileImage,
      };

      await updateProfile({ userId, payload: updatedProfileData });
      // Refetch the user profile data after the update
      refetch();
    } catch (error) {
      console.error('Error updating profile:', error);
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError || !userProfile) {
    console.error('Error fetching user profile:', error);
    return (
      <div>
        Error fetching user profile. Please check the console for details.
        <pre>{JSON.stringify(error, null, 2)}</pre>
      </div>
    );
  }

  // Render form fields with corresponding values from formData
  const renderFormFields = () => {
    return Object.entries(formData).map(([fieldName, fieldValue]) => (
      <div key={fieldName}>
        <label htmlFor={fieldName}>{fieldName}</label>
        <input
          type="text"
          id={fieldName}
          name={fieldName}
          value={fieldValue}
          onChange={(e) => setFormData({ ...formData, [fieldName]: e.target.value })}
        />
      </div>
    ));
  };

  return (
    <div>
      <h1>Your Profile</h1>
      <form>
        {renderFormFields()}
        <button type="button" onClick={handleUpdateProfile}>
          Update Profile
        </button>
      </form>
    </div>
  );
};

export default ProfilePage;
