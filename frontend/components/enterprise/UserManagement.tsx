/**
 * Enterprise User Management Component
 * 
 * This component provides comprehensive user management with
 * role-based access control, activity tracking, and security features.
 */

'use client';

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Users, 
  Search, 
  Filter, 
  Plus, 
  Edit, 
  Trash2, 
  Shield, 
  Eye, 
  EyeOff,
  Key,
  Activity,
  Calendar,
  Mail,
  CheckCircle,
  XCircle,
  AlertTriangle,
  UserPlus,
  Settings,
  Lock,
  Unlock
} from 'lucide-react';

interface User {
  id: string;
  username: string;
  email: string;
  role: 'admin' | 'manager' | 'reviewer' | 'operator' | 'viewer';
  status: 'active' | 'inactive' | 'locked' | 'pending';
  lastLogin: string;
  createdAt: string;
  permissions: string[];
  sessions: number;
  failedAttempts: number;
  mfaEnabled: boolean;
  department?: string;
}

interface UserActivity {
  id: string;
  userId: string;
  username: string;
  action: string;
  timestamp: string;
  ipAddress: string;
  userAgent: string;
  status: 'success' | 'failed';
}

interface Role {
  name: string;
  description: string;
  permissions: string[];
  userCount: number;
  color: string;
}

export default function UserManagement() {
  const [users, setUsers] = useState<User[]>([]);
  const [activities, setActivities] = useState<UserActivity[]>([]);
  const [roles, setRoles] = useState<Role[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRole, setSelectedRole] = useState('all');
  const [selectedStatus, setSelectedStatus] = useState('all');
  const [showCreateUser, setShowCreateUser] = useState(false);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  useEffect(() => {
    const loadUserData = async () => {
      setLoading(true);
      
      // Simulate API calls
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Mock users data
      setUsers([
        {
          id: '1',
          username: 'admin',
          email: 'admin@company.com',
          role: 'admin',
          status: 'active',
          lastLogin: '2024-01-15T10:30:00Z',
          createdAt: '2024-01-01T00:00:00Z',
          permissions: ['manage_users', 'manage_system', 'view_analytics', 'export_data'],
          sessions: 3,
          failedAttempts: 0,
          mfaEnabled: true,
          department: 'IT'
        },
        {
          id: '2',
          username: 'john.doe',
          email: 'john.doe@company.com',
          role: 'manager',
          status: 'active',
          lastLogin: '2024-01-15T09:15:00Z',
          createdAt: '2024-01-02T00:00:00Z',
          permissions: ['view_analytics', 'manage_team', 'review_documents'],
          sessions: 1,
          failedAttempts: 0,
          mfaEnabled: true,
          department: 'Finance'
        },
        {
          id: '3',
          username: 'jane.smith',
          email: 'jane.smith@company.com',
          role: 'reviewer',
          status: 'active',
          lastLogin: '2024-01-15T08:45:00Z',
          createdAt: '2024-01-03T00:00:00Z',
          permissions: ['review_documents', 'view_results'],
          sessions: 2,
          failedAttempts: 1,
          mfaEnabled: false,
          department: 'Operations'
        },
        {
          id: '4',
          username: 'bob.wilson',
          email: 'bob.wilson@company.com',
          role: 'operator',
          status: 'locked',
          lastLogin: '2024-01-14T16:30:00Z',
          createdAt: '2024-01-05T00:00:00Z',
          permissions: ['upload_documents', 'process_documents'],
          sessions: 0,
          failedAttempts: 5,
          mfaEnabled: false,
          department: 'Operations'
        },
        {
          id: '5',
          username: 'alice.brown',
          email: 'alice.brown@company.com',
          role: 'viewer',
          status: 'pending',
          lastLogin: '',
          createdAt: '2024-01-14T00:00:00Z',
          permissions: ['view_results'],
          sessions: 0,
          failedAttempts: 0,
          mfaEnabled: false,
          department: 'Legal'
        }
      ]);

      // Mock activities data
      setActivities([
        {
          id: '1',
          userId: '1',
          username: 'admin',
          action: 'Login',
          timestamp: '2024-01-15T10:30:00Z',
          ipAddress: '192.168.1.100',
          userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)',
          status: 'success'
        },
        {
          id: '2',
          userId: '2',
          username: 'john.doe',
          action: 'Password Change',
          timestamp: '2024-01-15T09:15:00Z',
          ipAddress: '192.168.1.101',
          userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)',
          status: 'success'
        },
        {
          id: '3',
          userId: '4',
          username: 'bob.wilson',
          action: 'Login Failed',
          timestamp: '2024-01-14T16:30:00Z',
          ipAddress: '192.168.1.103',
          userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)',
          status: 'failed'
        },
        {
          id: '4',
          userId: '3',
          username: 'jane.smith',
          action: 'Document Review',
          timestamp: '2024-01-15T08:45:00Z',
          ipAddress: '192.168.1.102',
          userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 14_7_1)',
          status: 'success'
        }
      ]);

      // Mock roles data
      setRoles([
        {
          name: 'admin',
          description: 'Full system access and management',
          permissions: ['manage_users', 'manage_system', 'view_analytics', 'export_data', 'manage_security'],
          userCount: 1,
          color: 'bg-red-100 text-red-800'
        },
        {
          name: 'manager',
          description: 'Team management and analytics access',
          permissions: ['view_analytics', 'manage_team', 'review_documents', 'export_data'],
          userCount: 3,
          color: 'bg-blue-100 text-blue-800'
        },
        {
          name: 'reviewer',
          description: 'Document review and approval',
          permissions: ['review_documents', 'view_results', 'add_comments'],
          userCount: 8,
          color: 'bg-green-100 text-green-800'
        },
        {
          name: 'operator',
          description: 'Document processing operations',
          permissions: ['upload_documents', 'process_documents', 'view_results'],
          userCount: 12,
          color: 'bg-yellow-100 text-yellow-800'
        },
        {
          name: 'viewer',
          description: 'Read-only access to results',
          permissions: ['view_results'],
          userCount: 25,
          color: 'bg-gray-100 text-gray-800'
        }
      ]);

      setLoading(false);
    };

    loadUserData();
    
    // Set up real-time updates
    const interval = setInterval(loadUserData, 30000); // Update every 30 seconds
    
    return () => clearInterval(interval);
  }, []);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-800';
      case 'inactive': return 'bg-gray-100 text-gray-800';
      case 'locked': return 'bg-red-100 text-red-800';
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getRoleColor = (role: string) => {
    switch (role) {
      case 'admin': return 'bg-red-100 text-red-800';
      case 'manager': return 'bg-blue-100 text-blue-800';
      case 'reviewer': return 'bg-green-100 text-green-800';
      case 'operator': return 'bg-yellow-100 text-yellow-800';
      case 'viewer': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getActivityIcon = (action: string) => {
    switch (action) {
      case 'Login': return <CheckCircle className="h-4 w-4 text-green-500" />;
      case 'Login Failed': return <XCircle className="h-4 w-4 text-red-500" />;
      case 'Password Change': return <Key className="h-4 w-4 text-blue-500" />;
      case 'Document Review': return <Eye className="h-4 w-4 text-purple-500" />;
      default: return <Activity className="h-4 w-4 text-gray-500" />;
    }
  };

  const filteredUsers = users.filter(user => {
    const matchesSearch = user.username.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         user.email.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesRole = selectedRole === 'all' || user.role === selectedRole;
    const matchesStatus = selectedStatus === 'all' || user.status === selectedStatus;
    return matchesSearch && matchesRole && matchesStatus;
  });

  const handleUserAction = (action: string, user: User) => {
    switch (action) {
      case 'edit':
        setSelectedUser(user);
        break;
      case 'lock':
        setUsers(prev => prev.map(u => 
          u.id === user.id ? { ...u, status: 'locked' as const } : u
        ));
        break;
      case 'unlock':
        setUsers(prev => prev.map(u => 
          u.id === user.id ? { ...u, status: 'active' as const, failedAttempts: 0 } : u
        ));
        break;
      case 'delete':
        setUsers(prev => prev.filter(u => u.id !== user.id));
        break;
      case 'reset_mfa':
        setUsers(prev => prev.map(u => 
          u.id === user.id ? { ...u, mfaEnabled: false } : u
        ));
        break;
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-96">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">User Management</h1>
          <p className="text-muted-foreground">
            Manage users, roles, and access permissions
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <Button variant="outline" size="sm">
            <Settings className="h-4 w-4 mr-2" />
            Settings
          </Button>
          <Button onClick={() => setShowCreateUser(true)}>
            <UserPlus className="h-4 w-4 mr-2" />
            Add User
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium flex items-center">
              <Users className="h-4 w-4 mr-2" />
              Total Users
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{users.length}</div>
            <p className="text-xs text-muted-foreground">Registered users</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium flex items-center">
              <CheckCircle className="h-4 w-4 mr-2" />
              Active Users
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {users.filter(u => u.status === 'active').length}
            </div>
            <p className="text-xs text-muted-foreground">Currently active</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium flex items-center">
              <Lock className="h-4 w-4 mr-2" />
              Locked Users
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {users.filter(u => u.status === 'locked').length}
            </div>
            <p className="text-xs text-muted-foreground">Security locked</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium flex items-center">
              <Shield className="h-4 w-4 mr-2" />
              MFA Enabled
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {users.filter(u => u.mfaEnabled).length}
            </div>
            <p className="text-xs text-muted-foreground">With 2FA</p>
          </CardContent>
        </Card>
      </div>

      {/* Main Content */}
      <div className="grid gap-6 lg:grid-cols-3">
        {/* Users List */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>Users</CardTitle>
                <CardDescription>
                  Manage user accounts and permissions
                </CardDescription>
              </div>
              <div className="flex items-center space-x-2">
                <div className="relative">
                  <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="text"
                    placeholder="Search users..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-8 w-64"
                  />
                </div>
                <select
                  value={selectedRole}
                  onChange={(e) => setSelectedRole(e.target.value)}
                  className="border rounded-md px-3 py-2 text-sm"
                >
                  <option value="all">All Roles</option>
                  <option value="admin">Admin</option>
                  <option value="manager">Manager</option>
                  <option value="reviewer">Reviewer</option>
                  <option value="operator">Operator</option>
                  <option value="viewer">Viewer</option>
                </select>
                <select
                  value={selectedStatus}
                  onChange={(e) => setSelectedStatus(e.target.value)}
                  className="border rounded-md px-3 py-2 text-sm"
                >
                  <option value="all">All Status</option>
                  <option value="active">Active</option>
                  <option value="inactive">Inactive</option>
                  <option value="locked">Locked</option>
                  <option value="pending">Pending</option>
                </select>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {filteredUsers.map((user) => (
                <div key={user.id} className="flex items-center justify-between p-3 border rounded-lg hover:bg-gray-50">
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                      <Users className="h-5 w-5 text-gray-600" />
                    </div>
                    <div>
                      <div className="flex items-center space-x-2">
                        <p className="font-medium">{user.username}</p>
                        <Badge className={getRoleColor(user.role)}>
                          {user.role}
                        </Badge>
                        <Badge className={getStatusColor(user.status)}>
                          {user.status}
                        </Badge>
                        {user.mfaEnabled && (
                          <Shield className="h-3 w-3 text-green-500" />
                        )}
                      </div>
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                        <span className="flex items-center">
                          <Mail className="h-3 w-3 mr-1" />
                          {user.email}
                        </span>
                        <span className="flex items-center">
                          <Calendar className="h-3 w-3 mr-1" />
                          Last login: {user.lastLogin ? new Date(user.lastLogin).toLocaleDateString() : 'Never'}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Button variant="ghost" size="sm" onClick={() => handleUserAction('edit', user)}>
                      <Edit className="h-4 w-4" />
                    </Button>
                    {user.status === 'active' ? (
                      <Button variant="ghost" size="sm" onClick={() => handleUserAction('lock', user)}>
                        <Lock className="h-4 w-4" />
                      </Button>
                    ) : user.status === 'locked' ? (
                      <Button variant="ghost" size="sm" onClick={() => handleUserAction('unlock', user)}>
                        <Unlock className="h-4 w-4" />
                      </Button>
                    ) : null}
                    {user.mfaEnabled && (
                      <Button variant="ghost" size="sm" onClick={() => handleUserAction('reset_mfa', user)}>
                        <Key className="h-4 w-4" />
                      </Button>
                    )}
                    <Button variant="ghost" size="sm" onClick={() => handleUserAction('delete', user)}>
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Roles & Activity */}
        <div className="space-y-6">
          {/* Roles */}
          <Card>
            <CardHeader>
              <CardTitle>Roles Overview</CardTitle>
              <CardDescription>
                User roles and permissions
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {roles.map((role) => (
                  <div key={role.name} className="p-3 border rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <Badge className={role.color}>{role.name}</Badge>
                      <span className="text-sm text-muted-foreground">
                        {role.userCount} users
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">
                      {role.description}
                    </p>
                    <div className="flex flex-wrap gap-1">
                      {role.permissions.slice(0, 3).map((permission) => (
                        <Badge key={permission} variant="outline" className="text-xs">
                          {permission}
                        </Badge>
                      ))}
                      {role.permissions.length > 3 && (
                        <Badge variant="outline" className="text-xs">
                          +{role.permissions.length - 3} more
                        </Badge>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Recent Activity */}
          <Card>
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
              <CardDescription>
                Latest user activities
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {activities.slice(0, 5).map((activity) => (
                  <div key={activity.id} className="flex items-center space-x-3 p-2 border rounded">
                    {getActivityIcon(activity.action)}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center space-x-2">
                        <p className="text-sm font-medium">{activity.username}</p>
                        <p className="text-sm text-muted-foreground">{activity.action}</p>
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {new Date(activity.timestamp).toLocaleString()}
                      </div>
                    </div>
                    <div className={`w-2 h-2 rounded-full ${
                      activity.status === 'success' ? 'bg-green-500' : 'bg-red-500'
                    }`} />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* User Details Modal */}
      {selectedUser && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <Card className="w-full max-w-2xl">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>User Details: {selectedUser.username}</CardTitle>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setSelectedUser(null)}
                >
                  ×
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="overview">
                <TabsList>
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="permissions">Permissions</TabsTrigger>
                  <TabsTrigger value="security">Security</TabsTrigger>
                  <TabsTrigger value="activity">Activity</TabsTrigger>
                </TabsList>
                
                <TabsContent value="overview" className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm font-medium">Username</p>
                      <p className="text-sm">{selectedUser.username}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium">Email</p>
                      <p className="text-sm">{selectedUser.email}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium">Role</p>
                      <Badge className={getRoleColor(selectedUser.role)}>
                        {selectedUser.role}
                      </Badge>
                    </div>
                    <div>
                      <p className="text-sm font-medium">Status</p>
                      <Badge className={getStatusColor(selectedUser.status)}>
                        {selectedUser.status}
                      </Badge>
                    </div>
                    <div>
                      <p className="text-sm font-medium">Department</p>
                      <p className="text-sm">{selectedUser.department || 'N/A'}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium">Created</p>
                      <p className="text-sm">{new Date(selectedUser.createdAt).toLocaleDateString()}</p>
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="permissions" className="space-y-4">
                  <div className="space-y-2">
                    {selectedUser.permissions.map((permission) => (
                      <div key={permission} className="flex items-center space-x-2 p-2 border rounded">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-sm">{permission}</span>
                      </div>
                    ))}
                  </div>
                </TabsContent>
                
                <TabsContent value="security" className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm font-medium">MFA Enabled</p>
                      <Badge className={selectedUser.mfaEnabled ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}>
                        {selectedUser.mfaEnabled ? 'Enabled' : 'Disabled'}
                      </Badge>
                    </div>
                    <div>
                      <p className="text-sm font-medium">Failed Attempts</p>
                      <p className="text-sm">{selectedUser.failedAttempts}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium">Active Sessions</p>
                      <p className="text-sm">{selectedUser.sessions}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium">Last Login</p>
                      <p className="text-sm">
                        {selectedUser.lastLogin ? new Date(selectedUser.lastLogin).toLocaleString() : 'Never'}
                      </p>
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="activity" className="space-y-4">
                  <div className="space-y-2">
                    {activities
                      .filter(activity => activity.userId === selectedUser.id)
                      .map((activity) => (
                        <div key={activity.id} className="flex items-center justify-between p-2 border rounded">
                          <div className="flex items-center space-x-2">
                            {getActivityIcon(activity.action)}
                            <div>
                              <p className="text-sm font-medium">{activity.action}</p>
                              <p className="text-xs text-muted-foreground">
                                {new Date(activity.timestamp).toLocaleString()}
                              </p>
                            </div>
                          </div>
                          <div className={`w-2 h-2 rounded-full ${
                            activity.status === 'success' ? 'bg-green-500' : 'bg-red-500'
                          }`} />
                        </div>
                      ))}
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
}
