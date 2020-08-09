-- phpMyAdmin SQL Dump
-- version 4.9.3
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8889
-- Generation Time: Aug 09, 2020 at 07:26 PM
-- Server version: 5.7.26
-- PHP Version: 7.4.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

--
-- Database: `API_Asm_reactJS`
--

-- --------------------------------------------------------

--
-- Table structure for table `blogs`
--

CREATE TABLE `blogs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` int(11) NOT NULL,
  `tieu_de` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `mo_ta` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `noi_dung` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `anh` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `danh_muc` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name_category` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `image` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `mota` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`id`, `name_category`, `image`, `mota`, `created_at`, `updated_at`) VALUES
(0, 'Chưa có danh mục', 'https://firebasestorage.googleapis.com/v0/b/phamvkhai20-e9657.appspot.com/o/images%2F108193790_1173535922982936_2317474697955950770_n.jpg?alt=media&token=bfd5cd14-adb1-4b27-8236-da0759dd0fd4', 'Sản phẩm không có danh mục', '2020-08-07 06:15:03', '2020-08-07 06:15:03'),
(3, 'Trẻ em', 'https://firebasestorage.googleapis.com/v0/b/phamvkhai20-e9657.appspot.com/o/images%2FActivePlay_C_x_CLEOFUS_Mau_ngoc_lam_FX9602_01_standard.jpg?alt=media&token=e4336fac-ec24-46cd-9d3b-07159fe6670f', 'Bỏ đi những muộn phiền, đặt combo liền', '2020-08-07 03:34:29', '2020-08-08 11:20:23'),
(8, 'Giày nữ', 'https://firebasestorage.googleapis.com/v0/b/phamvkhai20-e9657.appspot.com/o/images%2FGiay_Ultraboost_DNA_x_Disney_Mau_djen_FV6050_01_standard.jpg?alt=media&token=dc103a2a-d75d-4bf8-bff8-339685ff6572', 'Đi Khắp Thế Gian Yêu Thương', '2020-08-08 21:19:44', '2020-08-08 21:19:44'),
(9, 'Giày nam', 'https://firebasestorage.googleapis.com/v0/b/phamvkhai20-e9657.appspot.com/o/images%2Fpro_track6_A6T001_1.jpg?alt=media&token=0d7a0774-3cd7-4964-8cf2-23e49ba8d6f3', 'Cùng Trãi Nghiệm -Thêm Gắn Kết', '2020-08-08 21:20:23', '2020-08-08 21:20:23'),
(10, 'Phụ kiện', 'https://firebasestorage.googleapis.com/v0/b/phamvkhai20-e9657.appspot.com/o/images%2FABP001_1.jpg?alt=media&token=8c7382f2-234a-406e-b222-293ae8d4de15', 'Bỏ đi những muộn phiền, đặt combo liền', '2020-08-08 21:20:58', '2020-08-08 21:20:58');

-- --------------------------------------------------------

--
-- Table structure for table `contacts`
--

CREATE TABLE `contacts` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `ho_ten` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `so_dien_thoai` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tin_nhan` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `contacts`
--

INSERT INTO `contacts` (`id`, `ho_ten`, `email`, `so_dien_thoai`, `tin_nhan`, `created_at`, `updated_at`) VALUES
(7, 'adsss', 'phamvkhai20@gmail.com', '123', 'qqwewq', '2020-08-09 03:26:58', '2020-08-09 03:26:58'),
(8, 'adsss', 'phamvkhai20@gmail.com', '123', 'sa', '2020-08-09 03:32:04', '2020-08-09 03:32:04'),
(9, 'adsss', 'phamvkhai20@gmail.com', '123', 'ád', '2020-08-09 03:32:23', '2020-08-09 03:32:23');

-- --------------------------------------------------------

--
-- Table structure for table `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `connection` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2014_10_12_000000_create_users_table', 1),
(2, '2016_06_01_000001_create_oauth_auth_codes_table', 1),
(3, '2016_06_01_000002_create_oauth_access_tokens_table', 1),
(4, '2016_06_01_000003_create_oauth_refresh_tokens_table', 1),
(5, '2016_06_01_000004_create_oauth_clients_table', 1),
(6, '2016_06_01_000005_create_oauth_personal_access_clients_table', 1),
(7, '2019_08_19_000000_create_failed_jobs_table', 1),
(8, '2020_07_20_143524_create_session_users_table', 1),
(9, '2020_07_21_063535_create_products_table', 1),
(10, '2020_07_21_125056_create_categories_table', 2),
(11, '2020_08_04_012510_creat_blogs_table', 2),
(12, '2020_08_05_115938_create_orders_table', 2),
(13, '2020_08_05_121256_create_posts_table', 2),
(14, '2020_08_09_094919_create_contacts_table', 3);

-- --------------------------------------------------------

--
-- Table structure for table `oauth_access_tokens`
--

CREATE TABLE `oauth_access_tokens` (
  `id` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` bigint(20) UNSIGNED DEFAULT NULL,
  `client_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `scopes` text COLLATE utf8mb4_unicode_ci,
  `revoked` tinyint(1) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `expires_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `oauth_access_tokens`
--

INSERT INTO `oauth_access_tokens` (`id`, `user_id`, `client_id`, `name`, `scopes`, `revoked`, `created_at`, `updated_at`, `expires_at`) VALUES
('1f72a0fe063448872585a5cc01d6294b70d0fa048658eda22d665958952a1b6d8eee435abeecd4b5', 3, 1, 'Personal Access Token', '[]', 0, '2020-08-07 03:21:05', '2020-08-07 03:21:05', '2021-08-07 10:21:05'),
('75d35807913d2bfdc9c597d1466a1e728339dc787ad1d103828b5f531c79ef8f577b0f9654204f2d', 3, 1, 'Personal Access Token', '[]', 0, '2020-08-07 03:20:54', '2020-08-07 03:20:54', '2021-08-07 10:20:54');

-- --------------------------------------------------------

--
-- Table structure for table `oauth_auth_codes`
--

CREATE TABLE `oauth_auth_codes` (
  `id` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `client_id` bigint(20) UNSIGNED NOT NULL,
  `scopes` text COLLATE utf8mb4_unicode_ci,
  `revoked` tinyint(1) NOT NULL,
  `expires_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `oauth_clients`
--

CREATE TABLE `oauth_clients` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED DEFAULT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `secret` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `provider` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `redirect` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `personal_access_client` tinyint(1) NOT NULL,
  `password_client` tinyint(1) NOT NULL,
  `revoked` tinyint(1) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `oauth_clients`
--

INSERT INTO `oauth_clients` (`id`, `user_id`, `name`, `secret`, `provider`, `redirect`, `personal_access_client`, `password_client`, `revoked`, `created_at`, `updated_at`) VALUES
(1, NULL, 'Laravel Personal Access Client', 'vUyojHOzjjz4IOvdCZDsHABaMJQWFuj9Hkk5bh7R', NULL, 'http://localhost', 1, 0, 0, '2020-08-07 03:16:28', '2020-08-07 03:16:28'),
(2, NULL, 'Laravel Password Grant Client', 'ANP99mhJAP5Gcrqpg5i30xBhfVLpn9EPH3mrOmpj', 'users', 'http://localhost', 0, 1, 0, '2020-08-07 03:16:28', '2020-08-07 03:16:28');

-- --------------------------------------------------------

--
-- Table structure for table `oauth_personal_access_clients`
--

CREATE TABLE `oauth_personal_access_clients` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `client_id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `oauth_personal_access_clients`
--

INSERT INTO `oauth_personal_access_clients` (`id`, `client_id`, `created_at`, `updated_at`) VALUES
(1, 1, '2020-08-07 03:16:28', '2020-08-07 03:16:28');

-- --------------------------------------------------------

--
-- Table structure for table `oauth_refresh_tokens`
--

CREATE TABLE `oauth_refresh_tokens` (
  `id` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `access_token_id` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `revoked` tinyint(1) NOT NULL,
  `expires_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `id_user` int(11) NOT NULL,
  `chi_tiet_don` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `tong_tien` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `dia_chi` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `ho_va_ten` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `so_dien_thoai` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `chu_thich` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `code` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `orders`
--

INSERT INTO `orders` (`id`, `id_user`, `chi_tiet_don`, `tong_tien`, `dia_chi`, `email`, `ho_va_ten`, `so_dien_thoai`, `chu_thich`, `code`, `created_at`, `updated_at`) VALUES
(1, 3, '[{\"idSP\":\"1\",\"soluong\":4}]', '49248', 'a', 'a', 'a', 'a', 'a', '1596815884415', '2020-08-07 08:58:06', '2020-08-07 08:58:06'),
(2, 0, '[{\"idSP\":\"2\",\"soluong\":12}]', '1476', '1123', 'anhkhai3@gmail.com', '21312', '123', 'we', '1596952775521', '2020-08-08 22:59:44', '2020-08-08 22:59:44'),
(3, 3, '[{\"idSP\":\"2\",\"soluong\":1}]', '123', 'a', 'a', 'a', 'a', 'aa', '1596952819492', '2020-08-08 23:00:22', '2020-08-08 23:00:22'),
(4, 3, '[{\"idSP\":\"2\",\"soluong\":1}]', '123', '1123', 'khaipvph07362@fspt.edu.vn', '21312', '123', '123', '1596968872527', '2020-08-09 03:27:56', '2020-08-09 03:27:56'),
(5, 3, '[{\"idSP\":\"1\",\"soluong\":17}]', '209304', '1123', 'phamvkhai20@gmail.com', '21312', '123', '12312312', '1596973527716', '2020-08-09 04:45:34', '2020-08-09 04:45:34');

-- --------------------------------------------------------

--
-- Table structure for table `posts`
--

CREATE TABLE `posts` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` int(11) NOT NULL,
  `tieude` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `noi_dung` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `mo_ta` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `anh` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `posts`
--

INSERT INTO `posts` (`id`, `user_id`, `tieude`, `noi_dung`, `mo_ta`, `anh`, `created_at`, `updated_at`) VALUES
(11, 3, 'VINTAS SAIGON 1980s Cảm hứng Sài Gòn xưa giữa thời hiện đại', '<p><br>&nbsp;</p><figure class=\"image\"><img src=\"https://ananas.vn/wp-content/uploads/Blog-1980s_1.jpg\"></figure><p>Vintas “Saigon 1980s” - must-have item của những con người yêu phong cách vintage / retro</p><h3>&nbsp;</h3><h3>SAIGON 1980s PACK THUỘC VINTAS - MỘT DÒNG SẢN PHẨM CỦA ANANAS</h3><h3>&nbsp;</h3><p><br>Với cảm hứng từ hình ảnh mang \"màu film\" của đường phố Sài Gòn, nét riêng của Vintas Saigon 1980s Pack nổi bật qua đặc điểm: không “nét căng”, không rực rỡ mà lại thiên về sắc xanh, đỏ nhiều cảm xúc. Cụ thể, những màu sắc như Dark Denim, Vin Black, Sedona Sage và Vin Cordovan được ứng dụng trong thiết kế đều là những màu bạn dễ dàng bắt gặp khi tìm đọc các tài liệu về Sài Gòn trong quá khứ. Trên dáng giày Low Top / High Top cơ bản, cảm giác hoài niệm mà Vintas Saigon 1980s mang lại gợi người ta nhớ về hình bóng của Sài Gòn vào những năm “1900 hồi đó”. Gam màu trầm của Upper khi sử dụng chất liệu Canvas dày dặn phối cùng Suede, cộng thêm sự chắc chắn của chiếc đế cao su (vulcanized) màu gum tự nhiên, 5 lựa chọn thuộc Vintas Saigon 1980s Pack tạo nên một bức tranh hoài cổ, thể hiện sự điềm đạm trong tính cách người mang.<br><br>&nbsp;</p><figure class=\"image\"><img src=\"https://ananas.vn/wp-content/uploads/Blog-1980s_2.jpg\"></figure><p>Bộ sản phẩm mang hơi thở của đô thành Sài Gòn</p><figure class=\"image\"><img src=\"https://ananas.vn/wp-content/uploads/Blog-1980s_3.jpg\"></figure><p>Giữa thành phố Sài Gòn “rất mới” vẫn còn đó những con người Sài Gòn “rất cũ”</p><p><br>Những quán cà phê “cóc” kê cái bàn, cái ghế đơn giản với đủ mọi đối tượng khách hàng từ anh xe ôm đến bác hàng xóm ra ngồi đọc báo, chơi cờ; những tiệm may đo áo dài, veston nơi người thợ may tự tay cầm thước dây đo khách từng chút một; những chiếc bạt dựng tạm nơi vỉa hè cùng dòng chữ “hớt tóc” viết vội bằng tay. Nghĩ về Sài Gòn xưa, có lẽ rất khó để không nhớ đến những hình ảnh đặc trưng này.<br>&nbsp;</p><figure class=\"image\"><img src=\"https://ananas.vn/wp-content/uploads/Blog-1980s_4.jpg\"></figure><p>Sài Gòn đã thay đổi nhưng người Sài Gòn thì vẫn luôn bình dị như vậy thôi</p><p><br>Trong quá trình tìm kiếm chất liệu để thể hiện concept, chúng tôi may mắn gặp được một nhóm bạn trẻ mang sẵn \"nét xưa Vintas\" trong tính cách. Họ vốn đã yêu Sài Gòn, yêu những điều xưa cũ và gần gũi nơi đây. Do đó, câu chuyện về một ngày bình thường trong bối cảnh \"hơi khác thường\" của cậu thanh niên Thích Thanh Thế được xây dựng với cảm xúc rất tự nhiên, chân thật.<br><br>&nbsp;</p><p>&nbsp;</p><p><br>Vintas Saigon 1980s Pack đã lên kệ tại tất cả các cửa hàng chính thức của Ananas và sẵn sàng chờ bạn đến COP. Dù là một người lớn lên tại Sài Gòn, hay chỉ đơn thuần yêu nét đẹp bình dị của Sài Gòn ngày xưa, Saigon 1980s đều có thể là đôi giày dành cho bạn.<br><br>&nbsp;</p><figure class=\"image\"><img src=\"https://ananas.vn/wp-content/uploads/Blog-1980s_5.jpg\"></figure><p>Sài Gòn đã thay đổi nhưng người Sài Gòn thì vẫn luôn bình dị như vậy thôi</p><p>&nbsp;</p>', 'Là một bộ sưu tập thuộc dòng sản phẩm Vintas, Saigon 1980s Pack đem đến một sự lựa chọn “cũ kỹ thú vị”, phù hợp cho những người trẻ sống giữa thời hiện đại nhưng lại yêu cái nét bình dị của Sài Gòn ngày xưa.', 'https://firebasestorage.googleapis.com/v0/b/phamvkhai20-e9657.appspot.com/o/images%2FBlog-1980s_1.jpg?alt=media&token=9ee1e1fc-07dc-4d70-a9a3-9a1f9ef6b8a0', '2020-08-09 04:49:28', '2020-08-09 04:49:28'),
(12, 3, '\"GIẢI PHẪU\" GIÀY VULCANIZED', '<p>Trước khi thực hiện cuộc \"giải phẫu\" như tiêu đề của bài viết, chúng tôi nghĩ bạn cần biết rằng những đôi giày Sneaker bạn trên chân mỗi ngày hiện tại đang được chia làm 2 nhóm chính nếu phân loại chúng dựa trên phương pháp sản xuất:<br><br>- Nhóm thứ nhất là <i><strong>Cold Cement Sneaker</strong></i> bao gồm những mẫu Sneaker được làm từ phương pháp dán đế lạnh - đại diện cho nhóm này là những đôi giày \"ai cũng biết\" như Nike Air Force 1, Adidas Originals Stan Smith, Puma Suede, Asics Onitsuka Tiger Corsair,..hay những đôi giày Sportswear phục vụ cho các hoạt động thể thao.<br>- Nhóm thứ hai là <i><strong>Vulcanized Sneaker</strong></i> hay còn gọi giày cao su lưu hóa. Đây là những đôi giày mang form dáng classic, tối giản đã trở nên \"bất hủ\" với phương pháp sản xuất đã có từ rất lâu như Converse Chuck Taylor All Star, Vans Old Skool...và những đôi giày thuộc các dòng Basas, Vintas, Urbas từ Ananas hiện tại các bạn đang chọn lựa.<br><br>Mỗi nhóm giày lại mang một ưu, nhược điểm khác nhau tuỳ theo sự lựa chọn của mỗi người. Trong phạm vi ngắn của bài viết này, Ananas xin phép chỉ đào sâu thông tin xoay quanh cấu tạo của <i><strong>Vulcanized Sneaker</strong></i> (giày Vulcanized) - loại giày mà chúng tôi đã chọn làm \"cốt lõi\" để theo đuổi trong suốt hành trình của mình và \"mách\" cho bạn cách dễ nhất để phân biệt chúng với nhóm còn lại.<br><br>&nbsp;</p><figure class=\"image\"><img src=\"https://ananas.vn/wp-content/uploads/shoes-anatomy-thumbnail.jpg\"></figure><p>Có nhiều thông tin về cách gọi tên về các bộ phận trên giày, vì thế để tránh thông tin bị nhập nhằng, chúng tôi đã thống nhất sử dụng các từ ngữ được dùng trong quá trình sản xuất để gọi tên những bộ phận trên đôi giày của mình.</p><h3>&nbsp;</h3><h3>ANANAS CHỌN VULCANIZED SNEAKER LÀ SẢN PHẨM \"CỐT LÕI\" TRONG SUỐT HÀNH TRÌNH</h3><h3>&nbsp;</h3><p><br>Giống với mọi đôi Sneaker khác, giày Vulcanized về tổng thể cũng có 2 phần chính gồm Upper: toàn bộ các thành phần nằm ở phần thân trên và Sole: phần đế luôn được dùng cao su làm \"nền móng\" bên dưới. Theo chú thích từ (1) - (11) bạn có thể thấy trên hình, Upper bao gồm các bộ phận:<br>&nbsp;</p><p><br>&nbsp;</p><p><br>Upper quyết định tính thẩm mỹ của một đôi giày với các bộ phận được phối trộn chất liệu, màu sắc khác nhau</p><p><i><strong>(1) Vamp:</strong></i> mũi giày - phần nằm phía trước của giày, tiếp xúc với ngón chân.<br><i><strong>(2) Tongue:</strong></i> hay thường được gọi với cái tên thuần Việt là lưỡi gà. Đây là phần đệm bên trên của bàn chân và được kết nối với đỉnh của Vamp.<br><i><strong>(3) Stamp:</strong></i> miếng tem logo trái dứa được may đính hoặc ép nhiệt trực tiếp trên lưỡi gà.<br><i><strong>(4) Eyestays:</strong></i> là bộ phận chứa 2 hàng lỗ xỏ dây giày. Trong sản xuất, bộ phận này được gọi là nẹp ô-zê. Giày có thể có nẹp ô-zê hoặc không tùy vào ý đồ từ thiết kế.<br><i><strong>(5) Eyelets:</strong></i> nằm trên Eyestays, Eyelets là từ dùng để chỉ lỗ xỏ dây giày, nếu có khoen đi kèm, Eyelets còn được gọi là nút ô-zê.<br><i><strong>(6) Stitching:</strong></i> những đường chỉ may vừa có tác dụng gắn các phần lại với nhau, vừa có tác dụng trang trí.<br><i><strong>(7) Laces:</strong></i> dây giày - thành phần rất quen thuộc và có thể thay đổi dễ dàng.<br>&nbsp;</p><figure class=\"image\"><img src=\"https://ananas.vn/wp-content/uploads/shoess-anatomy-1.jpg\"></figure><p><br>&nbsp;</p><p>Counter hậu và nẹp hậu trang trí cho phần gót giày Ananas</p><figure class=\"image\"><img src=\"https://ananas.vn/wp-content/uploads/shoess-anatomy-2.jpg\"></figure><p><i><strong>(8) Aglets:</strong></i> nằm ở phần đầu của dây giày, còn gọi là đầu tips giữ dây.<br><i><strong>(9) Heel counter:</strong></i> counter hậu - bộ phận định hình gót cho chiếc giày (bên trong) và trang trí phần gót (bên ngoài).<br><i><strong>(10) Heel strap:</strong></i> hay còn gọi là nẹp hậu. Công dụng chính là tăng tính thẩm mỹ cho sản phẩm. Bộ phận này có thể không có ở một số kiểu giày và dáng giày.<br><i><strong>(11) Lining</strong></i><strong>:</strong> còn gọi là lót thân - lớp lót bên trong thân giày.<br>Ở mục số <i><strong>(12)</strong></i>, chúng ta có Insock: lớp đầu tiên chân bạn tiếp xúc khi xỏ chân vào giày. Insock ở một số mẫu giày sẽ có công dụng giữ ấm, khử mùi trong khi một số mẫu khác lại là bộ phận tạo độ êm ái khi mang và hạn chế ma sát với phần Sole (đế).<br><br>&nbsp;</p><p><br>&nbsp;</p><h3>&nbsp;</h3><h3>SNEAKER VỀ TỔNG THỂ LUÔN CÓ 2 PHẦN CHÍNH LÀ UPPER VÀ SOLE, CÒN VIỆC PHÂN LOẠI CHÚNG THÀNH VULCANIZED HAY COLD CEMENT LÀ DỰA TRÊN PHƯƠNG PHÁP SẢN XUẤT</h3><h3>&nbsp;</h3><p><br>Sole là bộ phận quan trọng và \"khó nhai\" nhất trong quá trình sản xuất giày. Phiên bản đầy đủ của chúng gồm 3 phần là Insole (đế trong), Midsole (đế giữa) và Outsole (đế ngoài) và thường có ở giày <i><strong>Cold Cement</strong></i>. Nhiều người vẫn lầm tưởng rằng Midsole của giày Vulcanized chính là lớp foxing cao su (15) nằm giữa Upper và Outsole. Tuy nhiên trên thực tế giày Vulcanized không có Midsole mà chỉ gồm 2 phần:<br><i><strong>(13) Insole:</strong></i> đế trong - phần nằm dưới Insock, không thể nhìn thấy từ bên ngoài vì bị che đi.<br><i><strong>(14) Outsole:</strong></i> đế ngoài - bộ phận duy nhất của giày tiếp xúc trực tiếp với mặt đất. Vì là bộ phận chịu nhiều lực ma sát trong lúc giày được sử dụng nên chất liệu đế cũng phải là những chất liệu có tính bền chắc cao.<br><br>&nbsp;</p><figure class=\"image\"><img src=\"https://ananas.vn/wp-content/uploads/shoess-anatomy-5.jpg\"></figure><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p>', 'Trước khi thực hiện cuộc \"giải phẫu\" như tiêu đề của bài viết, chúng tôi nghĩ bạn cần biết rằng những đôi giày Sneaker bạn trên chân mỗi ngày hiện tại đang được chia làm 2 nhóm chính nếu phân loại chúng dựa trên phương pháp sản xuất:', 'https://firebasestorage.googleapis.com/v0/b/phamvkhai20-e9657.appspot.com/o/images%2Fshoess-anatomy-5.jpg?alt=media&token=a770fcd7-6fee-40a2-bc8b-dbd373932ce2', '2020-08-09 04:52:54', '2020-08-09 04:52:54'),
(13, 3, 'SNEAKER FEST VIETNAM VÀ SỰ KẾT HỢP', '<p><br>&nbsp;</p><figure class=\"image\"><img src=\"https://ananas.vn/wp-content/uploads/peeping_pattas00.jpg\"></figure><p>Ananas Peeping Pattas - sự kết hợp đánh dấu lần đầu hợp tác <strong>Ananas x Sneaker Fest Vietnam</strong><br>Với số lượng phát hành giới hạn chỉ 50 đôi, cộng với việc các chi tiết sản phẩm, packaging của <i><strong>Ananas Peeping Pattas</strong></i> đều được \"chăm chút\" với các ý tưởng mới, khác biệt so với những phiên bản trước đây từ Ananas càng làm cho bản collab trở nên đặc biệt.</p><p>&nbsp;</p>', 'Có mặt tại Sneaker Fest Vietnam 2019, Ananas hân hạnh giới thiệu đến bạn một phát hành mang tên Ananas Peeping Pattas', 'https://firebasestorage.googleapis.com/v0/b/phamvkhai20-e9657.appspot.com/o/images%2Fpeeping_pattas00.jpg?alt=media&token=cfa7805a-7736-4b27-8b1f-c6ff9d110a41', '2020-08-09 04:55:39', '2020-08-09 04:55:39');

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` int(11) NOT NULL,
  `name_product` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `content` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `image` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `album` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `mota` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `soluong` int(11) NOT NULL,
  `price` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `category_id` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `old_price` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `user_id`, `name_product`, `content`, `image`, `album`, `mota`, `soluong`, `price`, `category_id`, `old_price`, `created_at`, `updated_at`) VALUES
(4, 3, 'BASAS MONO-BLACK - LOW TOP - ALL BLACK', '<p>– Gender: Unisex<br>– Size run: 35 – 46<br>– Upper: Canvas<br>– Outsole: Rubber</p><figure class=\"image\"><img src=\"https://ananas.vn/wp-content/uploads/Size-chart-1-e1559209680920.jpg\" alt=\"\"></figure>', 'https://firebasestorage.googleapis.com/v0/b/phamvkhai20-e9657.appspot.com/o/images%2Fpro_urbas_A61056_1.jpg?alt=media&token=ed75a681-c3d5-48d1-9141-e1a1d913252a', '[\"https://firebasestorage.googleapis.com/v0/b/phamvkhai20-e9657.appspot.com/o/images%2Fpro_urbas_A61056_1.jpg?alt=media&token=25876906-a34f-4637-bc2a-df2fd7bd7552\",\"https://firebasestorage.googleapis.com/v0/b/phamvkhai20-e9657.appspot.com/o/images%2Fpro_urbas_A61056_3.jpg?alt=media&token=e7752d09-897c-4b8d-9874-cec959949bd6\",\"https://firebasestorage.googleapis.com/v0/b/phamvkhai20-e9657.appspot.com/o/images%2Fpro_urbas_A61056_2.jpg?alt=media&token=de3713f3-f36b-4956-84ca-f0b5b2e0c069\",\"https://firebasestorage.googleapis.com/v0/b/phamvkhai20-e9657.appspot.com/o/images%2Fpro_urbas_A61056_4.jpg?alt=media&token=b55c45c7-2397-47c1-a21a-8ffb4317a8c2\"]', 'Vẻ ngoài cổ điển. Chất màu đơn giản cùng phần đế tiệp màu, \"ton-sur-ton\" với upper. Basas \"Mono\" Pack hứa hẹn sẽ là một điểm nhấn đầy thú vị cho tủ giày của bạn.', 200, '420000', '9', '0', '2020-08-09 05:00:21', '2020-08-09 05:00:21'),
(5, 3, 'BASAS NEW SIMPLE LIFE - LOW TOP - CORDOVAN', '<p><br>Gender: Unisex<br>Size run: 35 – 46<br>Upper: Canvas<br>Outsole: Rubber<br>&nbsp;</p><figure class=\"image\"><img src=\"https://ananas.vn/wp-content/uploads/Size-chart-1-e1559209680920.jpg\" alt=\"\"></figure>', 'https://firebasestorage.googleapis.com/v0/b/phamvkhai20-e9657.appspot.com/o/images%2Fpro_track6_A6T001_1.jpg?alt=media&token=769bd4d7-9a4b-4974-bd18-e1cb447934e3', '[\"https://firebasestorage.googleapis.com/v0/b/phamvkhai20-e9657.appspot.com/o/images%2Fpro_track6_A6T001_1.jpg?alt=media&token=d82edac0-6c7f-475d-8801-84cf3b1b942f\",\"https://firebasestorage.googleapis.com/v0/b/phamvkhai20-e9657.appspot.com/o/images%2Fpro_track6_A6T001_3.jpg?alt=media&token=f641ff30-839b-4ae6-bf78-bd7e515d498e\",\"https://firebasestorage.googleapis.com/v0/b/phamvkhai20-e9657.appspot.com/o/images%2Fpro_track6_A6T001_2.jpg?alt=media&token=603059a5-3757-450f-95e2-66f9d826dcaf\",\"https://firebasestorage.googleapis.com/v0/b/phamvkhai20-e9657.appspot.com/o/images%2Fpro_track6_A6T001_4.jpg?alt=media&token=f5ca4802-5fa1-4a72-8c88-9cab0f915dd1\"]', 'Thuộc dòng Basas với nét tối giản đặc trưng, khả năng kết hợp mọi outfit thường ngày, Basas \"New Simple Life\" dành cho những con người đơn giản nhưng không đơn điệu, bình thường mà chẳng tầm thường. Dáng Low Top cổ điển, không bao giờ lỗi thời chính là sự lựa chọn dễ chịu cho những ngày vô lo, vô nghĩ.', 400, '529000', '9', '500000', '2020-08-09 05:01:44', '2020-08-09 05:03:23'),
(6, 3, 'BASAS NEW SIMPLE LIFE - LOW TOP - CHILLI PEPPER', '<p>– Gender: Unisex<br>– Size run: 35 – 46<br>– Upper: Canvas<br>– Outsole: Rubber</p><figure class=\"image\"><img src=\"https://ananas.vn/wp-content/uploads/Size-chart-1-e1559209680920.jpg\" alt=\"\" srcset=\"https://ananas.vn/wp-content/uploads/Size-chart-1-e1559209680920.jpg 500w, https://ananas.vn/wp-content/uploads/Size-chart-1-e1559209680920-300x215.jpg 300w, https://ananas.vn/wp-content/uploads/Size-chart-1-e1559209680920-260x186.jpg 260w\" sizes=\"100vw\" width=\"500\"></figure>', 'https://firebasestorage.googleapis.com/v0/b/phamvkhai20-e9657.appspot.com/o/images%2Fpro_urbas_A61062_1-1.jpg?alt=media&token=b983e617-94bb-4245-866f-967209f97670', '[\"https://firebasestorage.googleapis.com/v0/b/phamvkhai20-e9657.appspot.com/o/images%2Fpro_urbas_A61062_1-1.jpg?alt=media&token=be2c5383-1e95-45b7-8ea2-6ada346894a8\",\"https://firebasestorage.googleapis.com/v0/b/phamvkhai20-e9657.appspot.com/o/images%2Fpro_urbas_A61062_3-1.jpg?alt=media&token=8c20de3e-d44b-4125-932e-aa6d76afde29\",\"https://firebasestorage.googleapis.com/v0/b/phamvkhai20-e9657.appspot.com/o/images%2Fpro_urbas_A61062_2-1.jpg?alt=media&token=f196e6b5-606d-4b51-bfb4-7382857553ac\",\"https://firebasestorage.googleapis.com/v0/b/phamvkhai20-e9657.appspot.com/o/images%2Fpro_urbas_A61062_4-1.jpg?alt=media&token=9b775f46-3a17-40de-92a5-d7ecee872637\"]', 'Thuộc dòng Basas với nét tối giản đặc trưng cùng khả năng kết hợp mọi outfit thường ngày, Basas \"New Simple Life\" dành cho những con người đơn giản nhưng không đơn điệu, bình thường mà chẳng tầm thường. Dáng Low Top cổ điển, không bao giờ lỗi thời chính là sự lựa chọn dễ chịu cho những ngày vô lo, vô nghĩ.', 200, '420000', '9', '230000', '2020-08-09 05:03:12', '2020-08-09 05:03:12'),
(7, 3, 'VINTAS THE NEW MILITARY - HIGH TOP - CAPULET OLIVE', '<p>– Gender: Unisex<br>– Size run: 35 – 46<br>– Upper: Canvas / Suede<br>– Outsole: Rubber</p><figure class=\"image\"><img src=\"https://ananas.vn/wp-content/uploads/Size-chart-1-e1559209680920.jpg\" alt=\"\"></figure>', 'https://firebasestorage.googleapis.com/v0/b/phamvkhai20-e9657.appspot.com/o/images%2FGiay_ZX_2K_Florine_Mau_trang_FW0090_01_standard.jpg?alt=media&token=6696714a-23a7-48c8-a468-b27316a1cc16', '[\"https://firebasestorage.googleapis.com/v0/b/phamvkhai20-e9657.appspot.com/o/images%2FGiay_ZX_2K_Florine_Mau_trang_FW0090_04_standard.jpg?alt=media&token=e33f9899-1c61-41f9-9579-5e98db321479\",\"https://firebasestorage.googleapis.com/v0/b/phamvkhai20-e9657.appspot.com/o/images%2FGiay_ZX_2K_Florine_Mau_trang_FW0090.jpg?alt=media&token=ba4415d8-0747-4e48-af84-35eaf5f9aded\",\"https://firebasestorage.googleapis.com/v0/b/phamvkhai20-e9657.appspot.com/o/images%2FGiay_ZX_2K_Florine_Mau_trang_FW0090_010_hover_standard.jpg?alt=media&token=8029e8b8-2744-4003-bacf-28a1310fdc3d\",\"https://firebasestorage.googleapis.com/v0/b/phamvkhai20-e9657.appspot.com/o/images%2FGiay_ZX_2K_Florine_Mau_trang_FW0090_02_standard.jpg?alt=media&token=56635002-ad5b-4fbc-8209-dfb0f445c9d4\",\"https://firebasestorage.googleapis.com/v0/b/phamvkhai20-e9657.appspot.com/o/images%2FGiay_ZX_2K_Florine_Mau_trang_FW0090_03_standard.jpg?alt=media&token=ee1d9645-5ac6-444f-8fbd-e589269a625a\"]', 'Tặng Ngay Bố Mẹ Kì Nghỉ Trọn Vẹn', 231, '580000', '8', '560000', '2020-08-09 05:04:39', '2020-08-09 05:04:39'),
(8, 3, 'BASAS NEW SIMPLE LIFE - LOW TOP - CHILLI PEPPER', '<p>– Gender: Unisex<br>– Size run: 35 – 46<br>– Upper: Canvas<br>– Outsole: Rubber</p><figure class=\"image\"><img src=\"https://ananas.vn/wp-content/uploads/Size-chart-1-e1559209680920.jpg\" alt=\"\" srcset=\"https://ananas.vn/wp-content/uploads/Size-chart-1-e1559209680920.jpg 500w, https://ananas.vn/wp-content/uploads/Size-chart-1-e1559209680920-300x215.jpg 300w, https://ananas.vn/wp-content/uploads/Size-chart-1-e1559209680920-260x186.jpg 260w\" sizes=\"100vw\" width=\"500\"></figure>', 'https://firebasestorage.googleapis.com/v0/b/phamvkhai20-e9657.appspot.com/o/images%2Fpro_vintas_A61044_1.jpg?alt=media&token=9b988b85-6c25-47ea-bbdc-c13975d52cba', '[\"https://firebasestorage.googleapis.com/v0/b/phamvkhai20-e9657.appspot.com/o/images%2Fpro_vintas_A61044_4.jpg?alt=media&token=74497643-9a61-40ba-9b93-5e61cca044e3\",\"https://firebasestorage.googleapis.com/v0/b/phamvkhai20-e9657.appspot.com/o/images%2Fpro_vintas_A61044_1.jpg?alt=media&token=3e664682-dd00-45ac-9ba5-45b4844d80f2\",\"https://firebasestorage.googleapis.com/v0/b/phamvkhai20-e9657.appspot.com/o/images%2Fpro_vintas_A61044_3.jpg?alt=media&token=21cf8766-5928-485b-9de4-b78a8a192a8b\",\"https://firebasestorage.googleapis.com/v0/b/phamvkhai20-e9657.appspot.com/o/images%2Fpro_vintas_A61044_2.jpg?alt=media&token=6dd4215c-bda7-420b-8d07-def457225a7e\"]', 'Thuộc dòng Basas với nét tối giản đặc trưng cùng khả năng kết hợp mọi outfit thường ngày, Basas \"New Simple Life\" dành cho những con người đơn giản nhưng không đơn điệu, bình thường mà chẳng tầm thường. Dáng Low Top cổ điển, không bao giờ lỗi thời chính là sự lựa chọn dễ chịu cho những ngày vô lo, vô nghĩ.', 0, '190000', '9', '0', '2020-08-09 05:05:52', '2020-08-09 05:05:52'),
(9, 3, 'Nike Air Max 2090 SP', '<p>– Gender: Unisex<br>– Size run: 35 – 46<br>– Upper: Canvas<br>– Outsole: Rubber</p><figure class=\"image\"><img src=\"https://ananas.vn/wp-content/uploads/Size-chart-1-e1559209680920.jpg\" alt=\"\" srcset=\"https://ananas.vn/wp-content/uploads/Size-chart-1-e1559209680920.jpg 500w, https://ananas.vn/wp-content/uploads/Size-chart-1-e1559209680920-300x215.jpg 300w, https://ananas.vn/wp-content/uploads/Size-chart-1-e1559209680920-260x186.jpg 260w\" sizes=\"100vw\" width=\"500\"></figure>', 'https://firebasestorage.googleapis.com/v0/b/phamvkhai20-e9657.appspot.com/o/images%2FGiay_NMD_360_Mau_djen_EE6352_01_standard.jpg?alt=media&token=cd30cf01-fd31-4b01-b038-00b09be67960', '[\"https://firebasestorage.googleapis.com/v0/b/phamvkhai20-e9657.appspot.com/o/images%2FGiay_NMD_360_Mau_djen_EE6352_04_standard.jpg?alt=media&token=54f4ff31-de18-48a5-af3c-456885375ff9\",\"https://firebasestorage.googleapis.com/v0/b/phamvkhai20-e9657.appspot.com/o/images%2FGiay_NMD_360_Mau_djen_EE6352_01_standard.jpg?alt=media&token=6c43de92-9584-431c-9083-1c522a057a14\",\"https://firebasestorage.googleapis.com/v0/b/phamvkhai20-e9657.appspot.com/o/images%2FGiay_NMD_360_Mau_djen_EE6352_03_standard.jpg?alt=media&token=2a43cfc2-483b-464e-be94-b420a7d383bc\",\"https://firebasestorage.googleapis.com/v0/b/phamvkhai20-e9657.appspot.com/o/images%2FGiay_NMD_360_Mau_djen_EE6352_05_standard.jpg?alt=media&token=356f554b-ec77-49c0-bcb9-6e8b4126f497\",\"https://firebasestorage.googleapis.com/v0/b/phamvkhai20-e9657.appspot.com/o/images%2FGiay_NMD_360_Mau_djen_EE6352_02_standard.jpg?alt=media&token=cfb8cb74-faf4-4704-b77c-e76ba3860dd8\"]', 'Thuộc dòng Basas với nét tối giản đặc trưng cùng khả năng kết hợp mọi outfit thường ngày, Basas \"New Simple Life\" dành cho những con người đơn giản nhưng không đơn điệu, bình thường mà chẳng tầm thường. Dáng Low Top cổ điển, không bao giờ lỗi thời chính là sự lựa chọn dễ chịu cho những ngày vô lo, vô nghĩ.', 30, '123000', '3', '110000', '2020-08-09 05:06:36', '2020-08-09 05:06:36'),
(10, 3, 'BASAS MONO-BLACK - LOW TOP - ALL BLACK', '<p>– Gender: Unisex<br>– Size run: 35 – 46<br>– Upper: Canvas<br>– Outsole: Rubber</p><figure class=\"image\"><img src=\"https://ananas.vn/wp-content/uploads/Size-chart-1-e1559209680920.jpg\" alt=\"\"></figure>', 'https://firebasestorage.googleapis.com/v0/b/phamvkhai20-e9657.appspot.com/o/images%2FGiay_Ultraboost_DNA_x_Disney_Mau_djen_FV6050_01_standard.jpg?alt=media&token=b5800c94-3346-4642-81bc-3f050ffbabbf', '[\"https://firebasestorage.googleapis.com/v0/b/phamvkhai20-e9657.appspot.com/o/images%2FGiay_Ultraboost_DNA_x_Disney_Mau_djen_FV6050_02_standard.jpg?alt=media&token=de195ded-98a0-47d4-88c1-baaf5e8a1d00\",\"https://firebasestorage.googleapis.com/v0/b/phamvkhai20-e9657.appspot.com/o/images%2FGiay_Ultraboost_DNA_x_Disney_Mau_djen_FV6050_05_standard.jpg?alt=media&token=7887f131-7dc5-42b2-8a2c-ad2ac27b2c1b\",\"https://firebasestorage.googleapis.com/v0/b/phamvkhai20-e9657.appspot.com/o/images%2FGiay_Ultraboost_DNA_x_Disney_Mau_djen_FV6050_03_standard.jpg?alt=media&token=82c9e1a5-25ed-463d-82a0-4cafd8214835\",\"https://firebasestorage.googleapis.com/v0/b/phamvkhai20-e9657.appspot.com/o/images%2FGiay_Ultraboost_DNA_x_Disney_Mau_djen_FV6050_010_hover_standard.jpg?alt=media&token=5d1da372-c319-4e8b-bcf3-6682bdeb5aeb\"]', 'Vẻ ngoài cổ điển. Chất màu đơn giản cùng phần đế tiệp màu, \"ton-sur-ton\" với upper. Basas \"Mono\" Pack hứa hẹn sẽ là một điểm nhấn đầy thú vị cho tủ giày của bạn.', 230, '2300000', '8', '2200000', '2020-08-09 05:07:38', '2020-08-09 05:07:38'),
(11, 3, 'BASIC BACKPACK - ANANAS TYPO LOGO - BLACK', '<p>Gender – /Unisex/<br>Hoạ tiết – /Ananas Typo Logo/<br>Chất liệu chính – 100% Polyester 600DWRP (chống bám nước)<br>Size – /Free/</p><figure class=\"image\"><img src=\"https://ananas.vn/wp-content/uploads/ABP001_12.jpg\" alt=\"\" srcset=\"https://ananas.vn/wp-content/uploads/ABP001_12.jpg 1500w, https://ananas.vn/wp-content/uploads/ABP001_12-150x150.jpg 150w, https://ananas.vn/wp-content/uploads/ABP001_12-300x300.jpg 300w, https://ananas.vn/wp-content/uploads/ABP001_12-768x768.jpg 768w, https://ananas.vn/wp-content/uploads/ABP001_12-1024x1024.jpg 1024w, https://ananas.vn/wp-content/uploads/ABP001_12-260x260.jpg 260w, https://ananas.vn/wp-content/uploads/ABP001_12-500x500.jpg 500w\" sizes=\"100vw\" width=\"400\"></figure>', 'https://firebasestorage.googleapis.com/v0/b/phamvkhai20-e9657.appspot.com/o/images%2FABP001_1.jpg?alt=media&token=16cf550e-0204-4b1f-bfb2-eb76dcfcf2f3', '[\"https://firebasestorage.googleapis.com/v0/b/phamvkhai20-e9657.appspot.com/o/images%2FABP001_1.jpg?alt=media&token=e2c6e51a-13cd-4c48-9f90-85788cb30ef8\",\"https://firebasestorage.googleapis.com/v0/b/phamvkhai20-e9657.appspot.com/o/images%2FABP001_10-1.jpg?alt=media&token=ce6187be-3807-4d3d-9cda-4536263e2a25\",\"https://firebasestorage.googleapis.com/v0/b/phamvkhai20-e9657.appspot.com/o/images%2FABP001_2.jpg?alt=media&token=0d640b49-cfdb-408b-83ba-ac59ed66833a\",\"https://firebasestorage.googleapis.com/v0/b/phamvkhai20-e9657.appspot.com/o/images%2FABP001_4.jpg?alt=media&token=37304b37-a4af-4283-a619-5ca0966952ea\"]', 'Balo cực kì cơ bản, phù hợp đeo xuôi sau lưng hoặc đeo ngược phía trước. Với chất liệu được xử lí chống bám nước ở cả 2 lớp vải, các chi tiết nhỏ được chăm chút kĩ càng và vừa vặn với chiếc laptop 15.6\'\'. Đây chắc chắn là một must have cho những ai yêu thích sự đơn giản mà hiệu quả.', 30, '480000', '10', '0', '2020-08-09 05:08:56', '2020-08-09 05:08:56'),
(12, 3, '5 PANEL HAT - WEST WILD', '<p>Gender: Unisex<br>Size: Free – Adjustable strap<br>Material: 100% Cotton</p>', 'https://firebasestorage.googleapis.com/v0/b/phamvkhai20-e9657.appspot.com/o/images%2Fpro_baseball_ABC102_1-1.jpg?alt=media&token=039bf97c-c521-4725-8eeb-b66561051da5', '[\"https://firebasestorage.googleapis.com/v0/b/phamvkhai20-e9657.appspot.com/o/images%2Fpro_baseball_ABC102_2.jpg?alt=media&token=cafb5d27-4aa2-4c56-aba2-01effa2c286c\",\"https://firebasestorage.googleapis.com/v0/b/phamvkhai20-e9657.appspot.com/o/images%2Fpro_baseball_ABC102_1-1.jpg?alt=media&token=cc8f1ba8-1777-4c9d-97c7-9d018113300c\",\"https://firebasestorage.googleapis.com/v0/b/phamvkhai20-e9657.appspot.com/o/images%2Fpro_baseball_ABC102_3.jpg?alt=media&token=05b122fb-e506-4ecb-8d04-b5c73fbce72b\"]', '5 Panel Hat - West Wild sở hữu vẻ ngoài ấn tượng với nhiều màu sắc trên dáng nón \"5 mảnh\" đậm dấu ấn văn hoá Hiphop. Chất vải mềm mại, khóa điều chỉnh linh hoạt sẽ giúp bộ streetwear outfit của bạn cá tính hơn hẳn.', 80, '280000', '10', '265000', '2020-08-09 05:09:56', '2020-08-09 05:09:56'),
(13, 3, 'VINTAS MISTER - LOW TOP - NARCISSUEDE', '<p>– Gender: Unisex<br>– Size run: 35 – 46<br>– Upper: Suede<br>– Outsole: Rubber</p><figure class=\"image\"><img src=\"https://ananas.vn/wp-content/uploads/Size-chart-1-e1559209680920.jpg\" alt=\"\"></figure>', 'https://firebasestorage.googleapis.com/v0/b/phamvkhai20-e9657.appspot.com/o/images%2FActivePlay_C_x_CLEOFUS_Mau_ngoc_lam_FX9602_01_standard.jpg?alt=media&token=b03f433c-279a-498b-ba85-76500aa1832b', '[\"https://firebasestorage.googleapis.com/v0/b/phamvkhai20-e9657.appspot.com/o/images%2FActivePlay_C_x_CLEOFUS_Mau_ngoc_lam_FX9602_03_standard.jpg?alt=media&token=a70fd717-a0ba-4fcf-a53c-3a2acc654187\",\"https://firebasestorage.googleapis.com/v0/b/phamvkhai20-e9657.appspot.com/o/images%2FActivePlay_C_x_CLEOFUS_Mau_ngoc_lam_FX9602_05_standard.jpg?alt=media&token=ae7e6375-5de2-4858-89c0-c12832f760e5\",\"https://firebasestorage.googleapis.com/v0/b/phamvkhai20-e9657.appspot.com/o/images%2FActivePlay_C_x_CLEOFUS_Mau_ngoc_lam_FX9602_01_standard.jpg?alt=media&token=24ff2348-e91b-4925-b2f8-5aa81aeaaf34\",\"https://firebasestorage.googleapis.com/v0/b/phamvkhai20-e9657.appspot.com/o/images%2FActivePlay_C_x_CLEOFUS_Mau_ngoc_lam_FX9602_04_standard.jpg?alt=media&token=a7ab357d-9d35-448a-86b8-ecce8c52dd29\",\"https://firebasestorage.googleapis.com/v0/b/phamvkhai20-e9657.appspot.com/o/images%2FActivePlay_C_x_CLEOFUS_Mau_ngoc_lam_FX9602_02_standard_hover.jpg?alt=media&token=f819217d-0f97-47e4-97a5-60636b6dd2c9\"]', 'Dáng Low Top truyền thống, kết hợp cùng phối màu gợi nét cổ điển, xưa cũ với chất liệu da Suede. Một sự lựa chọn của những ai muốn làm nổi bật lên sự chín chắn, tính điềm đạm cùng nét lịch thiệp cho bộ outfit của mình.', 90, '189000', '3', '170000', '2020-08-09 05:11:26', '2020-08-09 05:11:26');

-- --------------------------------------------------------

--
-- Table structure for table `session_users`
--

CREATE TABLE `session_users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `refresh_token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token_expried` datetime NOT NULL,
  `refresh_token_expried` datetime NOT NULL,
  `user_id` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `status` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `role` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `status`, `password`, `role`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, 'MERCUSYS_58DA', 'mailcuataodayy@gmail.com', 'true', '$2y$10$q.h.TlR11U2cflEUKFWUiuZLmPPkmlg9opotcnv5rG.tgMPeQUBMy', '1', NULL, '2020-08-07 03:12:09', '2020-08-07 03:12:09'),
(2, 'khai', 'phamvkhai20@gmail.com', 'true', '$2y$10$BHlBz34fPySm9ecEKtAH.epeO9krwnGhIko6lP/B.YrFLAGm32him', '2', NULL, '2020-08-07 03:12:28', '2020-08-07 03:12:28'),
(3, 'Khai 321', 'phamvkhai21@gmail.com', 'true', '$2y$10$vlGhZi8hYQWCFQliWt5pDezB/gdpKF/cnm35sFzZnefnaQUfkBXqa', '2', NULL, '2020-08-07 03:12:59', '2020-08-07 03:12:59');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `blogs`
--
ALTER TABLE `blogs`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `contacts`
--
ALTER TABLE `contacts`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `oauth_access_tokens`
--
ALTER TABLE `oauth_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD KEY `oauth_access_tokens_user_id_index` (`user_id`);

--
-- Indexes for table `oauth_auth_codes`
--
ALTER TABLE `oauth_auth_codes`
  ADD PRIMARY KEY (`id`),
  ADD KEY `oauth_auth_codes_user_id_index` (`user_id`);

--
-- Indexes for table `oauth_clients`
--
ALTER TABLE `oauth_clients`
  ADD PRIMARY KEY (`id`),
  ADD KEY `oauth_clients_user_id_index` (`user_id`);

--
-- Indexes for table `oauth_personal_access_clients`
--
ALTER TABLE `oauth_personal_access_clients`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `oauth_refresh_tokens`
--
ALTER TABLE `oauth_refresh_tokens`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `posts`
--
ALTER TABLE `posts`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `session_users`
--
ALTER TABLE `session_users`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `blogs`
--
ALTER TABLE `blogs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `contacts`
--
ALTER TABLE `contacts`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `oauth_clients`
--
ALTER TABLE `oauth_clients`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `oauth_personal_access_clients`
--
ALTER TABLE `oauth_personal_access_clients`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `orders`
--
ALTER TABLE `orders`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `posts`
--
ALTER TABLE `posts`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `session_users`
--
ALTER TABLE `session_users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;