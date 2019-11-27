const fetch = require('node-fetch');
const AbortController = require('abort-controller');
const Promise = require('bluebird');
fetch.Promise = Promise;
const agents = {
  http: require('http-proxy-agent'),
  https: require('https-proxy-agent'),
  socks4: require('socks-proxy-agent'),
  socks5: require('socks-proxy-agent'),
};
/*
const proxyString = `101.108.83.185:8080
1.198.110.34:9999
1.196.161.46:9999
101.231.104.82:80
1.2.248.163:8080
101.109.102.58:8080
102.68.130.162:8080
101.4.136.34:8080
101.37.118.54:8888
103.119.112.104:8888
103.119.112.73:8888
101.4.136.34:80
1.175.142.98:3128
101.4.136.34:81
103.10.86.203:8080
103.239.254.210:80
103.138.226.35:3128
103.22.248.59:48601
103.226.49.114:8080
103.133.204.17:8080
103.21.163.84:35101
103.239.253.218:59038
103.52.188.144:80
103.60.172.67:80
103.3.78.114:8080
103.51.15.244:3128
103.83.79.69:80
103.36.35.135:8080
103.30.245.197:8080
103.7.129.243:80
104.248.86.193:8080
104.248.8.101:8080
103.87.48.57:8080
109.159.193.185:8080
103.9.188.39:8080
109.167.209.36:8080
105.228.98.174:8080
109.124.97.226:8080
109.200.229.166:53281
109.68.41.78:8080
110.169.177.164:8080
109.187.153.51:8080
110.243.11.57:9999
110.243.15.250:9999
110.243.13.92:9999
110.243.20.160:9999
110.243.20.128:9999
109.75.46.202:52545
110.243.26.84:9999
110.243.28.155:9999
110.243.20.235:9999
110.243.28.61:9999
110.243.24.70:9999
110.243.4.40:9999
110.243.20.82:9999
111.29.3.184:8080
111.29.3.184:80
111.29.3.188:80
111.29.3.189:80
111.29.3.191:80
110.243.9.203:9999
111.29.3.190:8080
111.29.3.188:8080
111.29.3.190:80
111.29.3.186:8080
111.29.3.185:8080
111.29.3.192:80
111.29.3.187:8080
111.29.3.186:80
111.29.3.187:80
111.29.3.193:80
111.29.3.191:8080
111.29.3.192:8080
110.36.185.152:8080
111.29.3.193:8080
111.29.3.194:80
111.29.3.222:8080
111.29.3.195:8080
111.29.3.194:8080
111.29.3.223:8080
111.29.3.195:80
111.29.3.224:80
111.29.3.226:8080
111.29.3.225:80
111.29.3.226:80
111.29.3.223:80
111.29.3.220:80
111.29.3.222:80
111.29.3.224:8080
110.44.117.26:43922
112.78.163.51:8080
113.120.38.168:9999
113.128.29.36:9999
113.121.66.69:9999
113.64.197.238:61234
113.53.29.218:52983
114.230.117.124:9999
113.65.5.177:8118
113.128.30.119:9999
114.234.213.228:61234
115.110.129.134:80
115.223.3.42:80
115.239.66.125:61234
116.71.132.53:8080
117.186.112.42:8001
116.21.123.133:9999
116.12.89.217:8080
117.211.100.22:3128
117.70.39.66:61234
117.67.153.36:61234
117.70.39.214:61234
117.91.133.46:9999
117.28.96.235:9999
117.242.147.181:41385
117.88.5.228:3000
118.174.196.216:46070
117.69.24.117:9999
118.174.65.140:58949
118.174.220.49:54910
118.174.46.162:8080
118.31.250.72:8080
118.174.232.209:8080
118.173.233.80:31559
119.138.225.72:8118
118.91.131.142:8080
118.99.96.59:8080
122.50.5.146:10000
121.43.167.95:80
122.4.45.197:9999
121.233.226.189:9999
123.160.69.227:9999
122.224.65.201:3128
123.126.76.60:81
120.83.107.172:9999
122.252.253.241:60956
123.168.10.163:80
123.169.103.232:9999
123.160.98.35:9999
122.96.51.9:8080
122.4.48.201:9999
123.52.177.147:9999
124.120.234.140:8118
124.120.236.8:8118
125.25.29.31:8080
124.122.8.117:8080
125.25.20.33:8080
125.25.32.153:8080
13.95.132.65:8888
125.72.70.46:8060
125.93.148.56:8118
125.25.80.39:42790
125.88.190.1:3128
130.211.237.75:80
125.26.241.44:8080
125.27.93.246:8080
136.243.47.220:3128
138.197.104.219:8080
138.197.104.219:3128
138.197.145.103:3128
138.197.145.103:8080
134.209.188.111:8080
138.197.157.32:3128
138.197.157.32:8080
130.0.25.46:34964
13.56.38.158:80
138.197.157.44:3128
134.209.14.170:8080
138.197.157.44:8080
138.68.161.14:8080
13.66.25.52:80
138.68.161.14:3128
138.197.157.45:8080
138.197.157.45:3128
138.68.161.60:3128
138.197.157.60:3128
138.197.157.60:8080
138.201.106.88:8080
138.68.161.60:8080
138.68.165.154:8080
138.68.165.154:3128
138.68.173.29:8080
138.68.173.29:3128
138.197.204.55:8080
138.197.222.35:3128
138.204.234.8:8080
138.197.222.35:8080
137.59.50.225:8080
138.68.24.145:3128
138.68.24.145:8080
133.167.37.239:3128
138.68.41.90:3128
138.68.240.218:8080
138.68.240.218:3128
138.197.204.55:3128
138.68.41.90:8080
137.117.98.253:8080
139.59.169.246:8080
139.59.169.246:3128
131.255.135.8:8080
137.59.161.46:8080
139.196.229.198:80
138.204.23.76:53281
139.59.53.105:8080
139.217.80.237:8989
139.59.53.105:3128
139.162.78.109:3128
139.59.53.107:3128
139.59.101.223:3128
139.59.101.223:8080
139.59.53.107:8080
139.59.109.156:3128
139.59.109.156:8080
139.59.64.9:3128
139.224.6.115:3128
139.59.64.9:8080
139.59.61.229:8080
139.59.61.229:3128
139.59.53.106:3128
141.125.82.106:80
139.59.59.63:3128
139.59.62.255:8080
139.59.62.255:3128
14.207.170.205:8080
139.59.99.234:8080
139.59.99.234:3128
139.59.99.119:8080
142.93.112.205:8080
139.59.99.119:3128
139.59.59.63:8080
139.59.99.63:3128
142.93.115.120:8080
139.59.99.63:8080
139.59.53.106:8080
142.93.151.111:8080
14.207.120.198:8080
144.217.169.71:8080
14.207.123.5:8080
14.207.136.104:8080
149.56.106.104:3128
151.80.199.89:3128
151.80.36.115:1080
144.217.163.138:3128
144.217.163.138:8080
144.217.74.219:3128
14.207.42.50:8080
148.217.94.54:3128
150.129.250.28:33846
151.22.181.250:8080
149.255.154.62:8080
144.48.176.38:36555
147.75.113.110:443
157.230.241.89:3128
157.230.240.139:8080
157.230.240.139:3128
154.73.129.124:8080
154.127.52.195:3129
157.230.41.111:8080
157.245.204.7:8080
157.245.205.81:8080
157.245.52.229:8080
157.230.240.234:8080
157.245.193.82:8080
157.245.207.112:8080
157.245.207.190:8080
157.245.52.134:8080
157.245.197.232:8080
159.203.167.208:8080
157.245.197.92:8080
159.65.53.244:80
159.65.87.167:8080
159.89.16.64:3128
157.230.35.68:8080
159.65.95.233:8080
159.203.44.177:3128
159.203.89.13:8080
157.245.52.211:8080
159.203.166.41:8080
157.245.211.139:8080
163.172.147.94:8811
163.172.152.52:8811
163.172.136.226:8811
159.89.151.109:8080
163.172.189.32:8811
159.65.151.96:3128
159.65.151.96:8080
158.181.19.142:52261
163.172.169.167:3128
163.172.169.167:3129
162.243.108.141:8080
162.243.108.141:3128
162.243.108.161:3128
162.243.108.129:3128
162.243.108.129:8080
159.203.91.6:8080
162.243.108.161:8080
162.243.107.120:3128
159.192.98.101:80
162.243.107.120:8080
159.203.166.41:3128
159.65.14.186:8080
159.203.91.6:3128
159.89.204.226:8080
159.224.220.63:44299
165.227.215.62:3128
165.227.215.71:3128
165.227.36.202:8080
165.227.215.62:8080
167.114.64.174:9999
165.227.36.202:80
165.227.215.71:8080
161.132.101.141:35311
159.224.37.181:43462
165.22.254.99:3128
165.22.254.99:8080
165.22.99.165:9090
165.22.54.37:8080
165.22.241.186:8080
165.22.98.158:3128
167.71.132.188:8080
167.179.118.58:8080
167.71.138.113:8080
167.71.103.168:3128
167.71.109.52:8080
167.172.225.187:8080
167.172.225.187:80
167.172.225.187:3128
167.172.32.233:3128
167.99.182.74:8080
167.99.85.83:8080
169.57.1.84:80
167.99.170.82:3128
167.99.170.82:8080
169.57.1.85:80
169.57.1.85:8080
169.57.1.84:8123
169.57.1.84:8080
167.71.97.196:3128
168.181.12.74:32120
170.231.112.38:53281
167.71.254.71:3128
167.99.72.55:8080
170.247.0.230:9991
171.5.163.173:8080
173.212.202.65:80
173.249.35.163:10020
173.249.35.163:1448
173.249.35.163:10010
174.138.54.49:8080
174.138.54.49:3128
172.93.199.90:3131
171.15.173.87:9999
176.123.61.238:3128
176.9.75.42:3128
176.9.75.42:8080
176.9.119.170:8080
176.9.119.170:3128
175.142.3.188:8080
176.9.195.133:3128
176.115.197.118:8080
176.193.255.162:8080
176.110.121.90:21776
176.103.45.24:8080
176.235.148.41:9090
176.106.46.2:8080
176.241.89.36:38170
176.227.188.66:53281
176.221.6.160:53281
177.86.158.102:39340
178.128.100.248:8080
178.128.100.14:8080
178.205.240.242:3128
178.128.226.111:8080
178.132.220.241:8080
178.62.193.19:3128
178.62.193.19:8080
178.128.219.50:3128
178.128.26.201:8080
178.128.219.50:8080
178.62.232.215:8080
178.128.52.156:8080
178.128.84.43:8080
177.91.33.131:80
178.128.23.254:8080
177.85.78.4:8080
178.151.205.154:50607
178.213.13.136:53281
178.77.238.2:8080
178.44.222.146:41258
180.183.46.214:3128
180.168.13.26:8000
180.122.149.138:9999
180.76.150.182:9000
180.180.124.248:60098
181.129.171.124:8080
181.176.187.133:80
180.250.247.123:23500
181.113.68.194:8080
180.250.153.129:53281
181.177.250.221:8080
181.115.38.146:8080
181.129.98.146:8080
181.57.166.102:3129
181.65.186.226:8080
182.19.41.145:80
181.189.224.122:8080
182.253.235.97:3128
181.65.176.68:8080
182.253.114.66:8080
182.35.85.34:9999
182.35.83.13:9999
182.34.27.28:9999
182.35.85.38:9999
182.253.233.152:3128
182.253.70.27:8080
182.35.80.25:9999
182.52.121.182:8080
182.53.197.202:35216
182.35.83.32:9999
183.146.213.198:80
183.146.213.157:80
182.35.83.228:9999
182.35.84.145:9999
182.52.51.59:38238
182.72.92.222:8080
183.111.26.15:8080
182.96.203.11:49225
183.88.12.10:8080
183.88.129.18:8080
183.166.163.130:808
183.88.212.141:8080
183.89.3.43:8080
183.166.139.247:9999
183.88.168.220:8080
183.88.252.56:8080
185.101.94.150:6969
183.220.44.23:80
183.91.33.41:8083
183.91.33.41:83
183.91.33.41:92
185.229.239.16:8080
185.229.239.15:8080
185.229.239.19:8080
185.229.236.184:8080
185.229.236.181:3128
185.229.239.20:8080
185.229.236.181:8080
185.229.239.52:8080
183.88.31.74:8080
183.88.63.10:8080
183.89.6.30:8080
183.88.241.219:8080
185.229.239.17:8080
185.204.202.199:8080
185.17.134.149:31422
185.229.239.44:8080
185.154.131.4:8080
185.80.130.73:80
185.138.170.204:8080
185.229.239.51:8080
185.200.37.85:8080
185.26.219.34:43328
185.255.47.115:8080
185.69.28.213:8080
186.179.110.49:8181
186.10.82.22:55207
186.220.67.47:8080
185.98.27.162:8080
186.219.213.73:60446
186.228.147.58:20183
187.16.4.121:8080
187.190.237.173:9991
188.128.83.211:3128
188.166.83.17:3128
187.190.236.137:3128
188.166.83.17:8080
188.166.83.13:3128
188.166.83.20:3128
188.166.83.13:8080
188.166.83.20:8080
188.226.141.127:8080
188.226.141.61:3128
188.226.141.61:8080
188.226.141.211:8080
188.226.141.211:3128
188.226.141.127:3128
187.63.82.55:51769
188.225.9.121:8080
188.166.83.34:8080
188.35.187.93:3128
188.166.83.34:3128
187.62.195.145:8080
187.60.160.131:8083
188.235.107.7:60205
187.87.76.251:3128
188.65.237.46:49733
188.0.163.90:30121
188.6.197.119:32116
189.90.245.230:8080
190.0.53.26:34212
190.7.113.62:80
190.7.113.56:80
190.7.113.52:80
190.7.113.54:80
190.7.113.60:80
190.7.113.58:80
190.181.113.213:53281
190.3.25.82:999
190.7.113.57:80
190.242.98.61:8083
192.81.223.236:3128
190.61.40.166:53281
190.52.193.108:80
190.29.101.62:44427
192.241.245.207:8080
192.241.245.207:3128
194.116.76.57:8080
194.167.44.91:80
194.143.151.96:50110
191.103.254.125:51869
193.106.57.37:40594
190.96.91.243:8080
191.96.42.184:3129
195.154.194.149:3128
190.93.156.106:80
191.97.7.245:8080
193.193.71.178:43857
195.140.226.9:8080
193.41.88.58:53281
191.97.2.51:999
193.242.151.43:8080
191.241.226.230:53281
194.183.168.129:31385
195.175.209.194:8080
194.242.98.253:33364
195.170.21.18:3128
195.138.83.218:53281
193.37.192.243:8080
195.123.212.199:39178
193.106.130.249:8080
194.127.111.206:8080
195.209.176.2:8080
194.213.217.254:8080
193.85.228.178:43036
195.189.71.187:44911
195.8.51.55:8080
195.82.116.230:8080
193.193.240.37:61600
195.239.115.106:44413
194.181.82.190:35447
195.158.109.248:59646
195.191.131.150:42911
196.37.158.201:8080
196.37.158.200:8080
198.199.120.102:3128
198.199.120.102:8080
194.246.105.27:41258
198.199.119.119:3128
195.228.210.242:8080
198.199.119.119:8080
195.239.112.250:8080
196.20.12.33:8080
197.149.128.25:8080
198.15.196.122:808
197.211.245.50:53281
196.195.111.68:8080
196.14.52.63:35048
195.88.16.155:59555
198.23.143.11:8080
198.98.51.240:8080
198.199.91.20:3128
198.50.214.17:8585
199.195.248.24:8080
198.98.54.241:8080
197.234.35.82:53281
197.255.60.142:80
200.110.172.2:80
198.98.58.178:8080
200.195.148.18:3128
200.115.53.225:3128
200.195.188.2:46329
200.150.86.130:3128
200.89.178.246:80
200.89.174.181:3128
200.229.227.201:8080
200.89.178.63:3128
200.89.178.63:80
200.89.178.246:8080
200.89.159.149:8000
200.89.178.217:8080
200.89.178.217:80
200.215.171.238:8080
200.89.174.109:80
200.89.174.109:8080
200.89.178.246:3128
200.186.53.98:58855
200.4.169.181:3128
200.89.178.64:3128
200.89.178.26:8080
200.89.178.64:80
200.89.178.64:8080
200.89.178.63:8080
200.4.218.108:8080
200.89.178.26:80
200.89.178.67:80
200.89.99.30:56709
200.69.70.132:9991
200.94.140.50:57841
201.86.99.130:39900
201.219.32.107:999
201.49.89.221:8080
202.137.25.8:8080
202.137.10.180:48187
201.76.3.230:8080
201.72.97.40:8080
201.182.241.99:9991
201.28.39.6:3128
202.150.139.46:30211
202.154.180.53:53817
202.166.216.249:23500
202.158.49.138:56687
202.141.230.10:8080
202.166.160.106:8080
202.62.11.106:8080
202.158.49.142:56687
202.5.56.71:8080
202.62.67.209:53281
202.51.110.158:32247
202.43.115.145:8080
203.150.128.199:8080
202.7.54.35:8080
203.76.115.90:8080
202.85.52.151:80
202.85.52.150:80
203.150.186.161:8080
202.94.164.66:8080
203.202.245.58:80
203.190.53.45:43141
203.177.215.227:8080
203.6.149.130:80
207.154.231.212:8080
207.154.231.213:8080
207.154.231.211:3128
207.154.231.213:3128
207.154.231.211:8080
207.154.231.212:3128
207.154.231.217:8080
207.154.200.199:3128
207.154.231.217:3128
207.154.231.216:8080
206.189.37.244:3128
207.154.231.216:3128
206.189.37.244:8080
206.189.45.191:80
212.47.234.231:80
203.215.181.218:56543
212.24.53.118:3128
206.201.6.54:8080
210.212.31.215:8080
203.91.119.150:3128
212.42.206.58:3128
212.42.206.56:3128
209.212.33.99:8080
210.107.78.173:3128
208.114.192.126:8080
209.90.63.108:80
212.210.138.140:53281
210.212.68.213:35381
210.26.49.88:3128
210.22.5.117:3128
207.144.111.230:8080
212.66.61.118:37141
212.73.77.200:59763
212.72.159.22:30323
213.96.245.47:8080
212.24.148.234:55650
217.182.120.160:8080
217.23.6.40:3128
217.23.6.40:8080
217.61.19.109:80
217.61.96.235:8080
217.61.19.109:8080
217.61.19.109:3128
213.14.31.122:32938
213.147.192.23:3128
213.98.67.40:53343
219.232.48.222:8080
213.159.248.165:40805
213.58.202.70:54214
219.146.127.6:8060
218.60.8.99:3129
218.60.8.83:3129
217.88.64.125:8080
218.91.242.154:8118
223.111.131.100:80
223.111.131.100:8080
23.237.173.109:3128
23.237.173.102:3128
222.66.94.130:80
221.178.232.130:8080
222.135.30.231:8060
23.101.2.247:81
222.190.222.12:9999
222.127.15.61:3128
219.131.242.53:9797
223.204.171.135:8080
24.172.34.114:41860
23.101.2.247:8118
24.113.73.230:48678
222.218.122.5:9999
27.147.179.232:8080
24.113.136.54:48678
24.113.141.227:48678
24.113.38.149:48678
223.27.194.66:63141
223.27.196.18:8080
27.188.64.70:8060
27.145.79.40:8118
27.152.24.163:9999
35.193.3.113:8080
31.220.59.145:3128
31.220.59.145:80
31.40.37.77:80
35.247.83.89:3128
35.247.83.89:30051
36.104.132.176:3128
36.104.132.178:3128
27.152.90.160:9999
36.104.132.177:3128
35.163.85.149:80
34.90.113.143:3128
36.104.132.179:3128
27.72.98.89:8080
36.104.132.31:3128
31.192.42.150:41296
31.209.103.79:8080
36.25.243.251:80
36.25.243.51:80
31.41.92.154:23500
36.66.19.10:8080
36.66.172.121:39810
36.255.86.232:83
36.255.85.232:82
36.255.87.237:82
36.255.87.236:82
36.67.93.220:80
36.89.129.15:35270
36.89.194.113:36517
36.91.10.241:8080
37.235.65.76:8080
39.106.223.134:80
39.107.141.17:8888
39.137.69.7:8080
39.137.69.7:80
36.92.68.141:8080
39.137.69.6:80
39.96.63.240:80
39.137.69.10:80
39.137.107.98:8080
39.137.69.6:8080
39.137.69.10:8080
39.137.107.98:80
37.17.182.22:8081
41.180.64.254:80
37.18.74.220:8080
37.187.149.129:1080
36.92.88.106:8080
41.170.84.218:12354
36.92.93.253:8080
41.73.15.130:8080
41.73.15.130:80
41.73.15.134:80
41.73.15.134:8080
41.73.15.246:80
41.73.15.246:8080
41.65.168.39:8080
41.254.44.242:80
41.65.89.57:8080
43.225.67.181:8080
43.225.186.21:80
41.65.201.187:8080
41.50.83.179:39696
41.33.22.186:80
43.224.119.129:8080
43.255.228.150:3128
43.241.28.55:8080
43.242.242.196:8080
43.252.145.50:8080
45.116.106.109:8080
45.117.74.113:8060
45.120.119.55:59565
45.114.73.183:8080
45.116.114.163:80
45.112.56.142:51618
45.123.25.113:37761
45.123.43.66:59627
45.236.120.241:999
45.55.23.78:3128
45.55.23.78:8080
45.224.151.194:999
45.55.27.161:8080
45.55.27.15:8080
45.55.27.15:3128
45.55.9.218:8080
45.55.27.161:3128
45.55.9.218:3128
46.4.210.23:8080
46.4.96.137:3128
46.4.96.137:8080
46.101.217.34:8080
46.235.53.26:3128
45.250.226.56:8080
46.229.67.198:47437
45.79.58.206:8112
45.64.255.155:8080
45.7.132.78:999
46.243.65.225:8080
46.219.104.160:33652
47.112.222.241:8000
46.55.161.109:8080
46.73.33.253:8080
46.99.255.235:8080
47.108.24.183:80
47.106.185.95:3128
46.52.213.194:61976
47.52.32.109:80
47.110.130.152:8080
5.189.133.231:80
49.4.67.31:8080
47.88.225.123:8080
5.1.53.46:8080
47.52.225.33:80
5.128.35.36:3128
51.158.111.242:8811
51.158.111.229:8811
51.158.106.54:8811
51.158.108.135:8811
51.158.120.84:8811
51.158.113.142:8811
51.158.123.35:8811
51.158.119.88:8811
51.15.166.107:3128
51.158.179.242:8080
51.158.68.133:8811
51.158.68.26:8811
51.158.68.68:8811
49.48.81.111:8080
51.158.98.121:8811
51.158.99.51:8811
49.249.251.86:53281
50.235.28.146:3128
49.156.22.10:8080
51.15.48.219:3128
51.158.179.50:8080
5.141.86.107:55528
50.21.179.198:3128
51.68.189.52:3128
5.165.241.198:8080
5.2.164.205:34801
51.15.120.43:3128
51.68.141.240:3128
52.157.177.98:80
5.226.124.27:8080
52.80.58.248:3128
52.37.86.231:8118
51.254.182.63:60941
51.38.71.101:8080
5.9.73.93:8080
51.79.38.73:9999
60.205.132.71:80
59.152.13.10:55340
59.36.10.52:3128
62.159.156.142:80
61.131.250.84:9006
60.173.241.77:8060
61.54.6.21:8118
67.205.174.209:8080
62.106.122.90:36535
67.205.132.241:3128
67.205.174.209:3128
61.7.183.51:8080
62.122.18.7:50084
62.99.53.95:44487
67.205.149.230:8080
67.205.149.230:3128
67.205.146.29:8080
67.205.132.241:8080
68.183.191.248:8080
62.87.151.135:8080
67.205.146.29:3128
61.247.178.218:50691
65.182.5.212:8080
72.46.5.1:3128
70.35.213.229:36127
77.94.112.234:32222
78.40.109.38:3128
77.236.251.234:8080
77.72.124.246:1080
71.183.100.76:42413
78.24.101.86:8080
78.60.130.181:48280
77.48.23.181:42768
77.48.23.71:42768
78.83.199.235:53281
80.249.80.6:3128
81.4.255.25:3128
80.73.87.198:59175
79.98.158.145:8080
82.196.11.105:3128
82.196.11.105:8080
81.24.90.213:41258
82.135.148.201:8081
81.1.213.36:8080
81.163.62.221:34011
81.163.57.147:41258
80.234.38.44:3128
81.182.165.46:8080
83.16.127.185:8080
80.91.118.129:53281
83.174.218.83:8080
81.24.91.231:41258
83.171.98.129:37616
83.13.164.202:41734
81.30.55.173:3128
83.17.171.250:57087
82.117.215.14:80
83.234.210.110:8080
83.53.165.217:8080
84.214.150.146:8080
82.146.236.38:40840
82.200.88.50:3128
83.239.97.26:36703
88.198.24.108:8080
88.198.50.103:8080
88.198.24.108:3128
88.198.50.103:3128
85.21.63.219:53281
88.119.54.44:55984
85.209.90.143:80
84.22.61.46:53281
88.255.102.56:23500
88.199.82.68:32110
86.62.120.68:3128
85.238.104.235:47408
88.26.174.139:8080
87.250.109.174:8080
91.106.178.160:8080
86.125.38.153:56618
89.237.29.198:8080
89.223.80.30:8080
89.249.254.48:8080
89.31.46.208:8080
89.22.17.62:61616
89.190.119.154:3128
89.29.100.212:3128
90.178.25.224:58035
91.199.197.118:8080
89.29.100.217:3128
89.29.100.225:3128
91.200.114.58:41514
91.67.17.221:3128
92.114.234.206:53999
91.206.148.243:44492
91.237.3.59:8080
91.210.136.202:8080
91.214.240.19:46031
91.137.140.89:8082
91.210.47.93:3128
91.187.116.232:53960
91.206.210.54:54748
91.226.5.245:55857
91.219.171.70:42458
92.52.186.123:32329
91.194.239.122:8080
94.127.144.179:37690
94.158.152.54:8080
91.90.188.241:60036
91.92.80.25:60594
94.63.29.25:3128
92.247.2.26:21231
93.87.28.158:53281
94.25.104.250:8080
93.91.112.247:41258
94.153.169.22:59177
95.85.36.236:8080
95.85.36.236:3128
95.68.115.202:53281
95.9.113.12:52566
95.78.174.219:60473`;
const proxies = proxyString.split("\n").map(proxy => `${proxy.replace(':', ',')},http`);
// const proxies = [
//   '201.234.214.98,3128,http',
// ];
*/
const proxies = [
  {"ip":"52.157.177.98","port":"80","protocol":"http","realIp":"52.157.177.98","responseTime":178,"hidesIp":true},
  {"ip":"47.52.32.109","port":"80","protocol":"http","realIp":"213.127.47.88","responseTime":935,"hidesIp":false},
  {"ip":"36.25.243.51","port":"80","protocol":"http","realIp":"36.25.243.51","responseTime":715,"hidesIp":true},
  {"ip":"23.101.2.247","port":"81","protocol":"http","realIp":"23.101.2.247","responseTime":733,"hidesIp":true},
  {"ip":"219.232.48.222","port":"8080","protocol":"http","realIp":"118.144.139.220","responseTime":685,"hidesIp":true},
  {"ip":"212.47.234.231","port":"80","protocol":"http","realIp":"213.127.47.88","responseTime":4309,"hidesIp":false},
  {"ip":"183.146.213.198","port":"80","protocol":"http","realIp":"183.146.213.157","responseTime":720,"hidesIp":true},
  {"ip":"182.19.41.145","port":"80","protocol":"http","realIp":"182.19.41.145","responseTime":3205,"hidesIp":true},
  {"ip":"13.56.38.158","port":"80","protocol":"http","realIp":"13.56.38.158","responseTime":487,"hidesIp":true},
  // {"ip":"103.60.172.67","port":"80","protocol":"http","realIp":"{\n  \"origin\": \"158.69.138.27, 103.60.172.67, 158.69.138.27\"\n}","responseTime":607,"hidesIp":true}
  {"ip":"103.52.188.144","port":"80","protocol":"http","realIp":"103.52.188.144","responseTime":596,"hidesIp":true},
  // {"ip":"103.239.254.210","port":"80","protocol":"http","realIp":"{\n  \"origin\": \"78.37.18.28, 103.239.254.210, 78.37.18.28\"\n}","responseTime":500,"hidesIp":true}
  {"ip":"101.4.136.34","port":"81","protocol":"http","realIp":"101.4.136.34","responseTime":1340,"hidesIp":true},
].map(proxy => `${proxy.ip},${proxy.port},${proxy.protocol}`);
const concurrentChecks = 10;
const requestTimeout = 5000;

// const proxyTimeout = 5000;
// const ipCheckUrl = 'http://checkip.dyndns.com/';
const ipCheckUrl = 'https://ipinfo.io/ip';
const countryCheckUrl = 'https://api.myip.com/';

const getIpCountry = (ip, port, protocol) => fetch(countryCheckUrl, {
    agent: new agents[protocol](`${protocol}://${ip}:${port}`),
    redirect: 'follow',
    follow: 1,
    timeout: requestTimeout,
})
  .then(response => response.text())
  .then(response => response.trim())
  .then(data => JSON.parse(data))
  .then(({ cc }) => cc)

const getCurrentIp = () => fetch(ipCheckUrl)
  .then(response => response.text())
  .then(response => response.trim())
  // .then(response => response.match(/Current IP Address: (.+)<\/body>/)[1]);

const checkProxy = (ip, port, protocol) => {
  const Agent = agents[protocol];
  const proxy = `${protocol}://${ip}:${port}`;
  const startedAt = new Date().getTime();

  const controller = new AbortController();
  const timeout = setTimeout(() => { controller.abort(); }, requestTimeout);

  // console.log(proxy)

  return fetch(ipCheckUrl, {
    agent: new Agent(proxy),
    signal: controller.signal,
    redirect: 'follow',
    follow: 1,
    timeout: requestTimeout,
  })
  .then(function checkStatus(response) {
      if (response.ok) {
          return response;
      } else {
          throw Error(res.statusText);
      }
  })
  .then(response => response.text())
  .then(response => response.trim())
  // .then(response => response.match(/Current IP Address: (.+)<\/body>/)[1])
  .then(realIp => ({
    ip,
    port,
    protocol,
    realIp,
    responseTime: new Date().getTime() - startedAt,
  }))
  .finally(() => {
    clearTimeout(timeout);
  });
};

(async () => {
  console.log('Current IP: ');
  const myIp = await getCurrentIp();
  console.log(myIp);

  Promise.map(proxies, proxyData => {
    const [ ip, port, protocol ] = proxyData.split(',');

    return checkProxy(ip, port, protocol)
      .then(data => ({
        ...data,
        hidesIp: data.realIp !== myIp,
      }))
      // .then(data => getIpCountry(ip, port, protocol).then(countryCode => ({
      //   ...data,
      //   country_code: countryCode,
      // })))
      .then(data => {
        console.log(JSON.stringify(data))
      })
      .catch(err => {
        console.log(`${err.name}: ${protocol}://${ip}:${port}. ${err.message}`);
      });
  }, { concurrency: concurrentChecks });
})();
